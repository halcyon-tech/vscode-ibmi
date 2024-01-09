import { Locale } from "..";

export const en: Locale = {
  // Common words and texts:
  'Yes': `Yes`,
  'No': `No`,
  'Cancel': `Cancel`,
  'Retry': `Retry`,
  'Continue': `Continue`,
  'directory': `directory`,
  'shortcut': `shortcut`,
  'streamfile': `streamfile`,
  'error': `error`,
  'errors': `errors`,
  'Size': `Size`,
  'Modified': `Modified`,
  'Owner': `Owner`,
  'clearList': `$(trash) Clear list`,
  'clearedList': `Cleared list.`,
  'currentLibrary': `(current library)`,
  'duplicate': 'Duplicate',
  'save': 'Save',
  'delete': 'Delete',
  'cancel': 'Cancel',
  'not.connected':'Not connected to an IBM i',
  'text':'Text',
  'lines':'Lines',
  'changed':'Changed',
  'created':'Created',
  // Sandbox:
  'sandbox.input.user.title': `User for server`,
  'sandbox.input.user.prompt': `Enter username for {0}`,
  'sandbox.input.password.title': `Password for server`,
  'sandbox.input.password.prompt': `Enter password for {0}@{1}`,
  'sandbox.failedToConnect.text': 'Failed to connect to {0} as {1}',
  'sandbox.failedToConnect.title': `Failed to connect`,
  'sandbox.noPassword': `Connection to {0} ended as no password was provided.`,
  'sandbox.alreadyConnected': `This Visual Studio Code instance is already connected to a server.`,
  'sandbox.connected.modal.title': `Thanks for trying the Code for IBM i Sandbox!`,
  'sandbox.connected.modal.detail': `You are using this system at your own risk. Do not share any sensitive or private information.`,
  'sandbox.noconnection.modal.title': `Oh no! The sandbox is down.`,
  'sandbox.noconnection.modal.detail': `Sorry, but the sandbox is offline right now. Try again another time.`,
  // ConnectionBrowser:
  'connectionBrowser.connectTo.lastConnection': `Last connection`,
  'connectionBrowser.connectTo.lastUsed': `Last used: {0}`,
  'connectionBrowser.connectTo.title': `Last IBM i connections`,
  'connectionBrowser.connectTo.error': `Use the Server Browser to select which system to connect to.`,
  'connectionBrowser.deleteConnection.warning': `Are you sure you want to delete the connection {0}?`,
  'connectionBrowser.ServerItem.tooltip': ` (previous connection)`,
  'connectionBrowser.ServerItem.title': `Connect`,
  // helpView:
  'helpView.getStarted': `Get started`,
  'helpView.officialForum': `Open official Forum`,
  'helpView.reviewIssues': `Review Issues`,
  'helpView.reportIssue': `Report an Issue`,
  // ifsBrowser:
  'ifsBrowser.changeWorkingDirectory.prompt': `Changing working directory`,
  'ifsBrowser.changeWorkingDirectory.message': `Working directory changed to {0}.`,
  'ifsBrowser.addIFSShortcut.prompt': `Path to IFS directory`,
  'ifsBrowser.addIFSShortcut.error': `{0} is not a directory.`,
  'ifsBrowser.addIFSShortcut.errorMessage': `Error creating IFS shortcut! {0}`,
  'ifsBrowser.removeIFSShortcut.placeHolder': `Select IFS shortcut to remove`,
  'ifsBrowser.createDirectory.prompt': `Path of new folder`,
  'ifsBrowser.createDirectory.errorMessage': `Error creating new directory! {0}`,
  'ifsBrowser.createStreamfile.prompt': `Name of new streamfile`,
  'ifsBrowser.createStreamfile.infoMessage': `Creating streamfile {0}.`,
  'ifsBrowser.createStreamfile.errorMessage': `Error creating new streamfile! {0}`,
  'ifsBrowser.uploadStreamfile.uploadedFiles': `Upload completed.`,
  'ifsBrowser.uploadStreamfile.errorMessage': `Error uploading files! {0}`,
  'ifsBrowser.uploadStreamfile.noFilesSelected': `No files selected for upload.`,
  'ifsBrowser.uploadStreamfile.process.uploading': `Upload`,
  'ifsBrowser.uploadStreamfile.process.uploading.files': `sending {0} file(s)...`,
  'ifsBrowser.uploadStreamfile.process.uploading.directory':'sending {0} directory...',
  'ifsBrowser.uploadStreamfile.ask':'Do you want to copy or move the selection to {0}?',
  'ifsBrowser.uploadStreamfile.copy':'Copy',
  'ifsBrowser.uploadStreamfile.move':'Move',
  'ifsBrowser.uploadStreamfile.copy.failed':'Failed to copy selection to {0}: {1}',
  'ifsBrowser.uploadStreamfile.move.failed':'Failed to move selection to {0}: {1}',
  'ifsBrowser.deleteIFS.dirNotAllowed': `Unable to delete protected directories from the IFS Browser!\n{0}`,
  'ifsBrowser.deleteIFS.warningMessage': `Are you sure you want to delete {0}?`,
  'ifsBrowser.deleteIFS.multi.warningMessage': `Are you sure you want to delete the {0} selected files?`,
  'ifsBrowser.deleteIFS.deletionPrompt': `Once you delete the directory, it cannot be restored.\nPlease type \"{0}\" to confirm deletion.`,
  'ifsBrowser.deleteIFS.deletionPrompt2': ` (Press \'Escape\' to cancel)`,
  'ifsBrowser.deleteIFS.infoMessage': `Deleted {0}.`,
  'ifsBrowser.deleteIFS.errorMessage': `Error deleting streamfile! {0}`,
  'ifsBrowser.deleteIFS.cancelled': `Deletion canceled.`,
  'ifsBrowser.deleteIFS.default.home.dir':'{0} was the working directory; it is now {1}.',
  'ifsBrowser.moveIFS.prompt': `Name of new path`,
  'ifsBrowser.moveIFS.errorMessage': `Error renaming/moving {0}! {1}`,
  'ifsBrowser.moveIFS.renamed': `{0} was renamed to {1}.`,
  'ifsBrowser.moveIFS.moved': `{0} was moved to {1}.`,
  'ifsBrowser.copyIFS.prompt': `Name of new path`,
  'ifsBrowser.copyIFS.infoMessage': `{0} was copied to {1}.`,
  'ifsBrowser.copyIFS.errorMessage': `Error copying {0}! {1}`,
  'ifsBrowser.searchIFS.prompt': `Enter IFS directory to search`,
  'ifsBrowser.searchIFS.title': `Search directory`,
  'ifsBrowser.searchIFS.title2': `Search {0}`,
  'ifsBrowser.searchIFS.previousSearches': `Previous search terms`,
  'ifsBrowser.searchIFS.placeholder': `Enter search term or select one of the previous search terms.`,
  'ifsBrowser.searchIFS.placeholder2': `Enter search term.`,
  'ifsBrowser.searchIFS.noGrep': `grep must be installed on the remote system for the IFS search.`,
  'ifsBrowser.downloadStreamfile.infoMessage': `File was downloaded.`,
  'ifsBrowser.downloadStreamfile.errorMessage': `Error downloading {0}! {1}`,
  'ifsBrowser.getChildren.errorMessage': `Error loading objects.`,
  'ifsBrowser.handleFileListErrors.errorMessage': `{0} {1} occurred while listing files.`,
  'ifsBrowser.doSearchInStreamfiles.title': `Searching`,
  'ifsBrowser.doSearchInStreamfiles.progressMessage': `'{0}' in {1}.`,
  'ifsBrowser.doSearchInStreamfiles.noResults': `No results found searching for '{0}' in {1}.`,
  'ifsBrowser.doSearchInStreamfiles.errorMessage': `Error searching streamfiles.`,
  // LibraryListView:
  'LibraryListView.changeCurrentLibrary.currentlyActive': `Currently active`,
  'LibraryListView.changeCurrentLibrary.recentlyUsed': `Recently used`,
  'LibraryListView.changeCurrentLibrary.placeholder': `Filter or new library to set as current library`,
  'LibraryListView.changeCurrentLibrary.title': `Change current library`,
  'LibraryListView.changeCurrentLibrary.changedCurrent': `Changed current library to {0}.`,
  'LibraryListView.changeCurrentLibrary.alreadyCurrent': `{0} is already current library.`,
  'LibraryListView.changeUserLibraryList.prompt': `Changing library list (can use '*reset')`,
  'LibraryListView.changeUserLibraryList.removedLibs': `The following libraries were removed from the updated library list as they are invalid: {0}`,
  'LibraryListView.addToLibraryList.prompt': `Library to add`,
  'LibraryListView.addToLibraryList.tooLong': `Library is too long.`,
  'LibraryListView.addToLibraryList.alreadyInList': `Library {0} was already in the library list.`,
  'LibraryListView.addToLibraryList.invalidLib': `Library {0} does not exist.`,
  'LibraryListView.addToLibraryList.addedLib': `Library {0} was added to the library list.`,
  'LibraryListView.addToLibraryList.removedLibs': `The following libraries were removed from the updated library list as they are invalid: {0}`,
  'LibraryListView.removeFromLibraryList.removedLib': `Library {0} was removed from the library list.`,
  'LibraryListView.cleanupLibraryList.removedLibs': `The following libraries were removed from the updated library list as they are invalid: {0}`,
  'LibraryListView.cleanupLibraryList.validated': `Library list were validated without any errors.`,
  // objectBrowser:
  'objectBrowser.deleteFilter.infoMessage': `Delete filter '{0}'?`,
  'objectBrowser.createMember.prompt': `Name of new source member (member.ext)`,
  'objectBrowser.createMember.progressTitle': `Creating member {0}...`,
  'objectBrowser.createMember.errorMessage': `Error creating member {0}: {1}`,
  'objectBrowser.copyMember.prompt': `New path for copy of source member`,
  'objectBrowser.copyMember.errorMessage': `Cannot copy member to itself!`,
  'objectBrowser.copyMember.progressTitle': `Creating member {0}...`,
  'objectBrowser.copyMember.overwrite': `Are you sure you want overwrite member {0}?`,
  'objectBrowser.copyMember.errorMessage2': `Member {0} already exists!`,
  'objectBrowser.copyMember.errorMessage3': `Error creating member {0}: {1}`,
  'objectBrowser.deleteMember.warningMessage': `Are you sure you want to delete {0}?`,
  'objectBrowser.deleteMember.infoMessage': `Deleted {0}.`,
  'objectBrowser.deleteMember.errorMessage': `Error deleting member! {0}`,
  'objectBrowser.updateMemberText.prompt': `Update {0} text`,
  'objectBrowser.updateMemberText.errorMessage': `Error changing member text! {0}`,
  'objectBrowser.renameMember.prompt': `Rename {0}`,
  'objectBrowser.renameMember.errorMessage': `Error renaming member! {0}`,
  'objectBrowser.renameMember.invalid.input': `New member name must be different from it's current name`,
  'objectBrowser.uploadAndReplaceMemberAsFile.infoMessage': `Member was uploaded.`,
  'objectBrowser.uploadAndReplaceMemberAsFile.errorMessage': `Error uploading content to member! {0}`,
  'objectBrowser.downloadMemberContent.infoMessage': `Member was downloaded.`,
  'objectBrowser.downloadMemberContent.errorMessage': `Error downloading member! {0}`,
  'objectBrowser.searchSourceFile.prompt': `Enter LIB/SPF/member.ext to search (member.ext is optional and can contain wildcards)`,
  'objectBrowser.searchSourceFile.title': `Search source file`,
  'objectBrowser.searchSourceFile.invalidForm': `Please enter value in form LIB/SPF/member.ext`,
  'objectBrowser.searchSourceFile.aspText': `(in ASP {0})`,
  'objectBrowser.searchSourceFile.previousSearches': `Previous search terms`,
  'objectBrowser.searchSourceFile.placeholder': `Enter search term or select one of the previous search terms.`,
  'objectBrowser.searchSourceFile.placeholder2': `Enter search term.`,
  'objectBrowser.searchSourceFile.title2': `Search {0} {1}`,
  'objectBrowser.searchSourceFile.errorMessage': `Cannot search listings using *ALL.`,
  'objectBrowser.createFilter': `Create new filter`,
  'objectBrowser.createLibrary.prompt': `Name of new library`,
  'objectBrowser.createLibrary.errorMessage': `Cannot create library "{0}": {1}`,
  'objectBrowser.createLibrary.infoMessage': `Would you like to add the new library to the library list?`,
  'objectBrowser.createLibrary.errorMessage2': `Library name too long.`,
  'objectBrowser.createSourceFile.prompt': `Name of new source file`,
  'objectBrowser.createSourceFile.infoMessage': `Creating source file {0}.`,
  'objectBrowser.createSourceFile.errorMessage': `Error creating source file! {0}`,
  'objectBrowser.createSourceFile.errorMessage2': `Source filename must be 10 chars or less.`,
  'objectBrowser.changeObjectDesc.prompt': `Change object description for {0}, *BLANK for no description`,
  'objectBrowser.changeObjectDesc.errorMessage': `Object description must be 50 chars or less.`,
  'objectBrowser.changeObjectDesc.infoMessage': `Changed object description for {0} {1}.`,
  'objectBrowser.changeObjectDesc.errorMessage2': `Error changing description for {0}! {1}`,
  'objectBrowser.copyObject.prompt': `Create duplicate object to new library/object`,
  'objectBrowser.copyObject.errorMessage': `Invalid path: {0}. Use format LIB/OBJ`,
  'objectBrowser.copyObject.errorMessage2': `Library must be 10 chars or less.`,
  'objectBrowser.copyObject.errorMessage3': `Object name must be 10 chars or less.`,
  'objectBrowser.copyObject.infoMessage': `Copied object {0} {1} to {2}.`,
  'objectBrowser.copyObject.infoMessage2': `Copied object {0} {1} to {2}. Refresh object browser.`,
  'objectBrowser.copyObject.errorMessage4': `Error copying object {0}! {1}`,
  'objectBrowser.deleteObject.warningMessage': `Are you sure you want to delete {0} {1}?`,
  'objectBrowser.deleteObject.infoMessage': `Deleted {0} {1}.`,
  'objectBrowser.deleteObject.errorMessage': `Error deleting object! {0}`,
  'objectBrowser.deleteObject.progress':'Deleting object {0} {1}...',
  'objectBrowser.renameObject.prompt': `Rename object`,
  'objectBrowser.renameObject.errorMessage': `Object name must be 10 chars or less.`,
  'objectBrowser.renameObject.infoMessage': `Renamed object {0} {1} to {2}.`,
  'objectBrowser.renameObject.errorMessage2': `Error renaming object {0}! {1}`,
  'objectBrowser.renameObject.progress': `Renaming object {0} {1} to {2}...`,
  'objectBrowser.moveObject.prompt': `Move object`,
  'objectBrowser.moveObject.errorMessage': `Object name must be 10 chars or less.`,
  'objectBrowser.moveObject.infoMessage': `Moved object {0} {1} to {2}.`,
  'objectBrowser.moveObject.infoMessage2': `Moved object {0} {1} to {2}. Refresh object browser.`,
  'objectBrowser.moveObject.errorMessage2': `Error moving object {0}! {1}`,
  'objectBrowser.moveObject.progress': `Moving object {0} {1} to {2}...`,
  'objectBrowser.doSearchInSourceFile.title': `Searching`,
  'objectBrowser.doSearchInSourceFile.progressMessage': `Fetching member list for {0}.`,
  'objectBrowser.doSearchInSourceFile.searchMessage1': `'{0}' in {1}.`,
  'objectBrowser.doSearchInSourceFile.searchMessage2': `This is taking a while because there are {0} members. Searching '{1}' in {2} still.`,
  'objectBrowser.doSearchInSourceFile.searchMessage3': `What's so special about '{0}' anyway?`,
  'objectBrowser.doSearchInSourceFile.searchMessage4': `Still searching '{0}' in {1}...`,
  'objectBrowser.doSearchInSourceFile.searchMessage5': `While you wait, why not make some tea?`,
  'objectBrowser.doSearchInSourceFile.searchMessage6': `Wow. This really is taking a while. Let's hope you get the result you want.`,
  'objectBrowser.doSearchInSourceFile.searchMessage7': `Why was six afraid of seven?`,
  'objectBrowser.doSearchInSourceFile.searchMessage8': `How does one end up with {0} members?`,
  'objectBrowser.doSearchInSourceFile.searchMessage9': `'{0}' in {1}.`,
  'objectBrowser.doSearchInSourceFile.notFound': `No results found searching for '{0}' in {1}.`,
  'objectBrowser.doSearchInSourceFile.noMembers': `No members to search.`,
  'objectBrowser.doSearchInSourceFile.errorMessage': `Error searching source members: {0}`,
  // ProfilesView:
  'ProfilesView.saveConnectionProfile.prompt': `Name of profile`,
  'ProfilesView.saveConnectionProfile.infoMessage': `Saved current settings to profile '{0}'.`,
  'ProfilesView.deleteConnectionProfile.warningMessage': `Are you sure you want to delete the '{0}' profile?`,
  'ProfilesView.loadConnectionProfile.infoMessage': `Switched to profile '{0}'.`,
  'ProfilesView.loadCommandProfile.infoMessage': `Switched to profile '{0}'.`,
  'ProfilesView.loadCommandProfile.warningMessage': `Failed to get library list from command. Feature not installed.`,
  'ProfilesView.loadCommandProfile.errorMessage': `Failed to get library list from command: {0}`,
  'ProfilesView.setToDefault.infoMessage': `Reset to default`,
  'ProfilesView.setToDefault.detail': `This will reset the User Library List, working directory and Custom Variables back to the defaults.`,
  //Actions
  'actions.CURLIB': 'Current library, changeable in Library List',
  'actions.USERNAME': `Username for connection`,
  'actions.HOME': `Current home/working directory, changable in IFS Browser`,
  'actions.HOST': `Hostname or IP address from the current connection`,
  'actions.BUILDLIB': `The same as <code>&amp;CURLIB</code>`,
  'actions.LIBLC': `Library list delimited by comma`,
  'actions.LIBLS': `Library list delimited by space`,
  'actions.OPENLIB': `Library name where the source member lives (<code>&amp;OPENLIBL</code> for lowercase)`,
  'actions.OPENSPF': `Source file name where the source member lives (<code>&amp;OPENSPFL</code> for lowercase)`,
  'actions.OPENMBR': `Name of the source member (<code>&amp;OPENMBRL</code> for lowercase)`,
  'actions.member.EXT': `Extension of the source member (<code>&amp;EXTL</code> for lowercase)`,
  'actions.FULLPATH': `Full path of the file on the remote system`,
  'actions.RELATIVEPATH': `Relative path of the streamfile from the home directory or workspace`,
  'actions.PARENT': `Name of the parent directory or source file`,
  'actions.BASENAME': `Name of the file, including the extension`,
  'actions.streamfile.NAME': `Name of the file (<code>&amp;NAMEL</code> for lowercase)`,
  'actions.streamfile.EXT': `Extension of the file (<code>&amp;EXTL</code> for lowercase)`,
  'actions.LIBRARY': `Library name where the object lives (<code>&amp;LIBRARYL</code> for lowercase)`,
  'actions.NAME': `Name of the object (<code>&amp;NAMEL</code> for lowercase)`,
  'actions.object.TYPE': `Type of the object (<code>&amp;TYPEL</code> for lowercase)`,
  'actions.object.EXT': `Extension/attribute of the object (<code>&amp;EXTL</code> for lowercase)`,
  'actions.mainMenu.workWithActions': `Work with Actions`,
  'actions.mainMenu.createOrMaintain': `Create or maintain Actions. Actions are grouped by the type of file/object they target.`,
  'actions.mainMenu.newAction': `New Action`,
  'actions.duplicate.select': `Select an action to duplicate`,
  'actions.workAction.create.title': `Create action`,
  'actions.workAction.edit.title': `Edit action "{0}"`,
  'actions.workAction.duplicate.title': `Duplicate action "{0}"`,
  'actions.workAction.name': `Action name`,
  'actions.workAction.command': `Command(s) to run`,
  'actions.workAction.command.description': `Below are available variables based on the Type you have select below. You can specify different commands on each line. Each command run is stateless and run in their own job.`,
  'actions.workAction.extensions': `Extensions`,
  'actions.workAction.extensions.description': `A comma delimited list of extensions for this action. This can be a member extension, a streamfile extension, an object type or an object attribute`,
  'actions.workAction.types': `Type`,
  'actions.workAction.types.description': `The types of files this action can support.`,
  'actions.workAction.types.member': `Member`,
  'actions.workAction.types.member.description': `Source members in the QSYS file system`,
  'actions.workAction.types.streamfile': `Streamfile`,
  'actions.workAction.types.streamfile.description': `Streamfiles in the IFS`,
  'actions.workAction.types.object': `Object`,
  'actions.workAction.types.object.description': `Objects in the QSYS file system`,
  'actions.workAction.types.file': `Local File (Workspace)`,
  'actions.workAction.types.file.description': `Actions for local files in the VS Code Workspace.`,
  'actions.workAction.environment': `Environment`,
  'actions.workAction.environment.description': `Environment for command to be executed in.`,
  'actions.workAction.environment.ile': `ILE`,
  'actions.workAction.environment.ile.description': `Runs as an ILE command`,
  'actions.workAction.environment.qsh': `QShell`,
  'actions.workAction.environment.qsh.description': `Runs the command through QShell`,
  'actions.workAction.environment.pase': `PASE`,
  'actions.workAction.environment.pase.description': `Runs the command in the PASE environment`,
  'actions.workAction.delete.confirm': `Are you sure you want to delete the action "{0}"?`,
  'actions.workAction.refresh':'Refresh',
  'actions.workAction.refresh.description':'The browser level to refresh after the action is done',
  'actions.workAction.refresh.no':'No',
  'actions.workAction.refresh.no.description':'No refresh',
  'actions.workAction.refresh.parent':'Parent',
  'actions.workAction.refresh.parent.description':'The parent container is refreshed',
  'actions.workAction.refresh.filter':'Filter',
  'actions.workAction.refresh.filter.description':'The parent filter is refreshed',
  'actions.workAction.refresh.browser':'Browser',
  'actions.workAction.refresh.browser.description':'The entire browser is refreshed',
  'actions.workAction.runOnProtected':'Run on protected/read only',
  'actions.workAction.runOnProtected.description':'Allows the execution of this Action on protected or read only targets'
};