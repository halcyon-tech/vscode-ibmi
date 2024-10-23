
import * as vscode from "vscode";
import Crypto from 'crypto';
import { readFileSync } from "fs";
import { API, GitExtension } from "../import/git";

let gitLookedUp: boolean;
let gitAPI: API | undefined;
export function getGitAPI(): API | undefined {
  if (!gitLookedUp) {
    try {
      gitAPI = vscode.extensions.getExtension<GitExtension>(`vscode.git`)?.exports.getAPI(1);
    }
    catch (error) {
      console.log(`Git extension issue.`, error);
    }
    finally {
      gitLookedUp = true;
    }
  }
  return gitAPI;
}

export function md5Hash(file: vscode.Uri): string {
  const bytes = readFileSync(file.fsPath);
  return Crypto.createHash("md5")
    .update(bytes)
    .digest("hex")
    .toLowerCase();
}

/**
 * Check whether two given uris point to the same file/member
 */
export function areEquivalentUris(uriA: vscode.Uri, uriB: vscode.Uri) {
  return uriStringWithoutFragment(uriA) === uriStringWithoutFragment(uriB);
}

/**
 * We do this to find previously opened files with the same path, but different case OR readonly flags.
 * Without this, it's possible for the same document to be opened twice simply due to the readonly flag.
 */
export function findExistingDocumentUri(uri: vscode.Uri) {
  const possibleDoc = findExistingDocument(uri);
  return possibleDoc?.uri || uri;
}

export function findExistingDocument(uri: vscode.Uri) {
  const baseUriString = uriStringWithoutFragment(uri);
  const possibleDoc = vscode.workspace.textDocuments.find(document => uriStringWithoutFragment(document.uri) === baseUriString);
  return possibleDoc;
}

export function findExistingDocumentByName(nameAndExt: string) {
  const possibleDoc = vscode.workspace.textDocuments.find(document => document.fileName.toLowerCase().endsWith(nameAndExt.toLowerCase()));
  return possibleDoc ? possibleDoc.uri : undefined;
}

/**
 * We convert member to lowercase as members are case insensitive.
 */
function uriStringWithoutFragment(uri: vscode.Uri) {
  // To lowercase because the URI path is case-insensitive
  const baseUri = uri.scheme + `:` + uri.path;
  const isCaseSensitive = (uri.scheme === `streamfile` && /^\/QOpenSys\//i.test(uri.path));
  return (isCaseSensitive ? baseUri : baseUri.toLowerCase());
}

/**
 * Given the uri of a member or other resource, find all
 * (if any) open tabs where that resource is being edited.
*/
export function findUriTabs(uriToFind: vscode.Uri | string): vscode.Tab[] {
  let resourceTabs: vscode.Tab[] = [];
  for (const group of vscode.window.tabGroups.all) {
    group.tabs.filter(tab =>
      (tab.input instanceof vscode.TabInputText)
      && (uriToFind instanceof vscode.Uri ? areEquivalentUris(tab.input.uri, uriToFind) : tab.input.uri.path.startsWith(`${uriToFind}/`))
    ).forEach(tab => {
      resourceTabs.push(tab);
    });
  }
  return resourceTabs;
}

export function generateTooltipHtmlTable(header: string, rows: Record<string, any>) {
  return `<table>`
    .concat(`${header ? `<thead>${header}</thead>` : ``}`)
    .concat(`${Object.entries(rows)
      .filter(([key, value]) => value !== undefined && value !== '')
      .map(([key, value]) => `<tr><td>${vscode.l10n.t(key)}:</td><td>&nbsp;${value}</td></tr>`)
      .join(``)}`
    )
    .concat(`</table>`);
}

const activeContexts: Map<string, number> = new Map;
/**
 * Runs a function while a context value is set to true.
 * 
 * If multiple callers call this function with the same context, only the last one returning will unset the context value.
 * 
 * @param context the context value that will be set to `true` during `task` execution
 * @param task the function to run while the context value is `true`
 */
export async function withContext<T>(context: string, task: () => Promise<T>) {
  try {
    let stack = activeContexts.get(context);
    if (stack === undefined) {
      await vscode.commands.executeCommand(`setContext`, context, true);
      activeContexts.set(context, 0);
    }
    else {
      stack++;
      activeContexts.set(context, stack);
    }
    return await task();
  }
  finally {
    let stack = activeContexts.get(context);
    if (stack !== undefined) {
      if (stack) {
        stack--;
        activeContexts.set(context, stack);
      }
      else {
        await vscode.commands.executeCommand(`setContext`, context, undefined);
        activeContexts.delete(context);
      }
    }
  }
}