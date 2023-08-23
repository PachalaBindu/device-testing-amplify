## mobile_emulator

## Getting Started

- Make sure that Node.js is installed

## Emulator

- Install the latest version of Android Studio
- Open the Andriod Studio app
- You can see "More Actions" dropdown in welcome page. Click on that.
- Click on "Virtual Device Manager"
- Here you can see the list of devices you created.
- You can create a new device by clicking on "Create Device".

### Setting up the environment variables

- Edit the system environment variables

  1.  Add the two variables

      - Variable name: ANDROID_HOME
      - Variable value: C:\Users\{{YourUsername}}\AppData\Local\Android\Sdk

      - Variable name: JAVA_HOME
      - Variable value: C:\Program Files\Java\jdk1.8.0_91

  Note: Change the Variable values according to your system

  2. Under path variable, add these
     - %ANDROID_HOME%
     - %ANDROID_HOME%\tools
     - %ANDROID_HOME%\platform-tools

  Then, click on ok.

## Installing appium

- Open the command prompt and run this:
  npm i --location=global appium

It will install the appium globally in your system.

- To install the driver, run this:

  appium driver install uiautomator2

- To start the appium, run this simple command:
  appium

- To see the list of devices connected, run this command:
  adb devices

## Writing a test in JS

- Refer to this link for creating the node project.
  https://appium.io/docs/en/2.0/quickstart/test-js/

- Refer to test.js file for writing a simple test to login to healthapp in chrome browser.

## Running the test

- After writing the test, start the appium as mentioned above.
- Once the appium starts running, open the android studio and go to Virtual Device Manager.
- Click the run button of the device you wanted. You can see the android device on your screen. Click on power button if it is not started.
- Now in VS code, run the test file by:
  node test.js
  It will open the chrome browser in the android device and will perform all the functionalities that you mentioned.

### Challenges in running

- If you are getting any error for the chrome browser version, it is because of the version conflict between device browser and the chromedriver used by appium. So, please check the browser version of the device. If both the versions are not same, then download the chromedriver of device's version from this:

  https://chromedriver.chromium.org/downloads

- Once it is downloaded, open the zip file and copy the chromedriver and paste it in:
  C:\Users\{{Username}}\node_modules\appium-uiautomator2-driver\node_modules\appium-chromedriver\chromedriver\win

- Once the chrome browser is opened successfully, it will open the url which you passes in the test file.
- If the elements are not loading in the page, then open the notepad and paste these two lines:
  Vulkan = off
  GLDirectMem = on
  Save the file as "advancedFeatures.ini" and paste it in C:\Users\{{username}}\.android

By following these, you will be able to open the url in chrome browser and can interact with the elements in the page.
