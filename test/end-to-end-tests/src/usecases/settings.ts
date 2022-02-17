/*
Copyright 2018 New Vector Ltd
Copyright 2019 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { ElementSession } from "../session";

export async function openSettings(session: ElementSession, section: string): Promise<void> {
    const menuButton = await session.query(".mx_UserMenu");
    await menuButton.click();
    const settingsItem = await session.query(".mx_UserMenu_iconSettings");
    await settingsItem.click();
    if (section) {
        const sectionButton = await session.query(
            `.mx_UserSettingsDialog .mx_TabbedView_tabLabels .mx_UserSettingsDialog_${section}Icon`);
        await sectionButton.click();
    }
}
