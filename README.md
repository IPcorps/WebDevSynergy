# What's this?
WebDevSynergy is a simple, configurable, extensible environment that will make getting started in web development easier and faster. WebDevSynergy is IDE **independent**. All you need to get it going is [NodeJS](https://nodejs.org/en/) installed.

# What's in stock?
WebDevSynergy consists of two **independent** parts. It is a [Browsersync](https://www.browsersync.io/) (live server) and [Gulp](https://gulpjs.com/) (task manager). If you only want a [Browsersync](https://www.browsersync.io/) and you are using only javascript + html + css, there is no need to install [Gulp](https://gulpjs.com/). In this case, for cleanliness, after downloading and unpack, you can:
1. Delete the gulpfile.js folder.
2. In _devDependencies_ of the package.json file, leave only the line with _browser-sync_.
3. In _scripts_ of the package.json file, delete _rfw_ task.

# How to install and configure.

1. Download and install [NodeJS](https://nodejs.org/en/) (see instructions on the NodeJS website).
2. Download and unpack this repository to a place convenient for you (or you can use git commands).
3. If you only need a [Browsersync](https://www.browsersync.io/), use the information in the **What's in stock?** section above.
4. Open your console and **navigate to the unzipped folder**. Run the _**npm install**_ command to download the packages.
5. To get started:
   * Run the live server with **npm run rls** command.
   * Run the translation typescript -> javascript, pug -> html, etc. with the **npm run rfw** command.

And yes, that's all! 🤠 Your development application will be located in the app folder.

# Under the hood.

 How it works. Saving files with _.ts_, _.pug_, and _.styl_ extensions is tracked by [Gulp](https://gulpjs.com/) and immediately translated to _.js_, _.​​html_ and _.css_, respectively. In turn, changes in the same files with the _.js_, _.html_ and _.css_ extensions are monitored by [Browsersync](https://www.browsersync.io/), which will immediately refresh the page in the browser. You can organize your files into separate folders within app. [Gulp](https://gulpjs.com/) will always create a final file next to the original. It's simple 🤓.

# And as an addition.

Using the features of [Gulp](https://gulpjs.com/), you can add any functionality you need. It shouldn't be difficult to understand the structure of the code in the gulpfile.js folder. [Browsersync](https://www.browsersync.io/) and [Gulp](https://gulpjs.com/) are much more powerful than the capabilities used here. But that's another story, which you can learn more about on their official pages.

This environment does not depend on the IDE, and you can write the code in any text editor. But it is much more convenient and efficient to use the IDE for this, and it does not matter which one. Just open the folder in [Visual Studio Code](https://code.visualstudio.com/), for example. You will see the following picture:


At the bottom left, you will see your NPM Scripts from the package.json file, from where you can run [Browsersync] (https://www.browsersync.io/) (rlf) and [Gulp] (https://gulpjs.com/ ) (rfw) in one click. If you want, for better clarity, you can always rename these commands to something more readable by simply changing their name in the package.json. Above, in your Workspace, you will see your working app folder and your files.

And yes, that's all again! 🤠 There is no need to install any additional plugins and other things for the environment to work. Likewise, you can open your working folder in another IDE, it doesn't matter.