<a href="https://newfold.com/" target="_blank">
    <img src="https://newfold.com/content/experience-fragments/newfold/site-header/master/_jcr_content/root/header/logo.coreimg.svg/1621395071423/newfold-digital.svg" alt="Newfold Logo" title="Newfold Digital" align="right" 
height="42" />
</a>

# wp-module-onboarding WordPress Module
[![Version Number](https://img.shields.io/github/v/release/newfold-labs/wp-module-onboarding?color=21a0ed&labelColor=333333)](https://github.com/newfold/wp-module-onboarding/releases)
[![License](https://img.shields.io/github/license/newfold-labs/wp-module-onboarding?labelColor=333333&color=666666)](https://raw.githubusercontent.com/newfold-labs/wp-module-onboarding/master/LICENSE)

The Onboarding module is designed to streamline various tasks related to user onboarding and customization within a WordPress environment. It provides functionalities to enhance user experience, configure settings, install plugins and themes dynamically, and interact with other modules seamlessly.

## Module Responsibilities

1. **User Redirection:**
   - Provide functions to redirect users after login, ensuring a smooth transition and a complete onboarding experience.

2. **Dynamic Plugin and Theme Installation:**
   - Install various plugins and themes dynamically based on user requirements, enhancing customization options.

3. **WordPress Initialization:**
   - Initialize WordPress options, permalinks, and configurations to ensure a consistent setup across users.

4. **WordPress Version Upgrade:**
   - Automatically upgrade WordPress versions for users running below version 6.2, ensuring security and performance improvements.

5. **Brand-based Experience Customization:**
   - Show a completely different experience to users based on the brands they are redirected from, enhancing brand consistency and personalization.

6. **Custom Theme Generation:**
   - Generate themes with templates and multiple pages according to user selections, including chosen colors and fonts, enhancing visual customization.

7. **Event Handling:**
   - Send various events according to user selections, enabling tracking and analytics for user behavior.

8. **Integration with Onboarding Data Module:**
   - Interact with the Onboarding Data Module for various operations and tasks, ensuring seamless user experience.

## Critical Paths
1. **Automatic Onboarding Redirection:**
   - Users should be automatically redirected to the onboarding process the first time they log in to wp-admin.

2. **Onboarding Suppression:**
   - Subsequent logins to WordPress should not display the onboarding process for users who have completed it previously.

3. **WordPress Version Upgrade Prompt:**
   - Users should be guided to upgrade the WordPress version if it is less than 6.2.

4. **Brand-specific Experience:**
   - Users should experience a brand-specific interface, displaying different brand logos and colors tailored to their brand affiliation.

5. **Preview Options Display:**
   - Users should be presented with either the Wonder Blocks or YITH Wonder Live Previews options.

6. **Customized Child Theme Generation:**
   - The child theme generated should reflect the choices made by the user during their onboarding experience.

7. **User-provided Site Details:**
   - The user's site should display a title, description, and logo provided during the onboarding process.

## Release Process

### Pre-release Preparation

1. **Checkout the trunk branch locally:**
   ```bash
   git checkout trunk
   ```

2. **Ensure trunk is up to date with origin:**
   ```bash
   git pull origin trunk
   ```

3. **Test for any breaking changes and highlight concerns:**
   - **Conduct thorough testing to ensure stability and functionality.**
   - Note any issues or concerns for further action.

4. **Increment version following Semantic Versioning 2.0.0:**
   - Update version in:
     - `bootstrap.php`
     - `package.json`
     - `package-lock.json`
   - Run:
     ```bash
     npm install
     npm run build
     ```
   - Verify existence of `build/<new_version>` folder.

5. **Push changes to origin:**
   ```bash
   git push origin trunk
   ```

### Creating a Release

6. **Create a new release on Github:**
   - Go to: [New Release](https://github.com/newfold-labs/wp-module-onboarding/releases/new)
   - Tag number should match the updated version number.
   - Title: `Version <tag_number>`
   - Generate release notes.
   - Publish Release.

7. **Ensure release tag exists on [Github](https://github.com/newfold-labs/wp-module-onboarding/releases/) and [Satis](https://github.com/newfold-labs/satis/actions).**

### Pull Request and Testing

8. **Make a branch in the Brand Plugin:**
   - Create a branch `update/onboarding` in the Brand plugin.

9. **Update Onboarding version in:**
   - `composer.json`
   - `composer.lock`
   - Run:
     ```bash
     composer update newfold-labs/wp-module-onboarding
     ```

10. **Push changes to the branch and add a small release description in the PR Desc.**

11. **Wait for Cypress test workflow to run:**
    - Ensure all Onboarding tests pass.

12. **If any tests fail, fix them in the module and tag a re-release by deleting the earlier release and tag.**

### Final Steps

13. **Create a bump PR to the master branch of Brand Plugin.**

14. **Send release details notification on WordPress Pillar APAC channel.**

15. **Tag PRESS1 and share link in PRESS 1,2,4 Coordination Code Reviews channel:**
    - Include Release Tag and Bump PR links.

## Installation

### 1. Add the Bluehost Satis to your `composer.json`.

 ```bash
 composer config repositories.bluehost composer https://bluehost.github.io/satis
 ```

### 2. Require the `newfold-labs/wp-module-onboarding` package.

 ```bash
 composer require newfold-labs/wp-module-onboarding
 ```

[More on NewFold WordPress Modules](https://github.com/newfold-labs/wp-module-loader)
