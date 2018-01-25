// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

// tslint:disable-next-line:no-stateless-class
export class ErrorUtils {
    public static outputHasModuleNotInstalledError(moduleName: string, content?: string): boolean {
        return typeof content === 'string' && (content!.indexOf(`No module named ${moduleName}`) > 0 || content!.indexOf(`No module named '${moduleName}'`) > 0);
    }
}
