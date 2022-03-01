## Installation For Heroku User

#### Required Buildpack
* https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest
* https://github.com/DuckyTeam/heroku-buildpack-imagemagick
* heroku/nodejs

Note: add buildpack in above showed sequence only

### Steps To Setup Bot on Heroku
1. Fork this github repository.
2. Go to [`Heroku.com`](https://www.heroku.com/)
3. Create new app.
4. Enter `App name` and click on `Create app`.
5. Go to `Settings`.
6. Click on `Add buildpack`.
7. Add `ffmpeg`, `imagemagick`, `nodejs` and click on `Save changes` respectively. (Copy and paste from `Required for heroku`)
8. Go to `Deploy` and click on `GitHub (connect to GitHub)`.
9. Connect your `GitHub` account to `Heroku` account.
10. After conncted with `GitHub`, scroll down search a repository `<your-username>/valor`.
11. Click on `Connect`.
12. Scroll down, and click on `Deploy Branch`. (It's take few minutes, br patience)
13. Go to `Resources` and turn ON `worker: node .`
14. Go to `More↑↓` and click on `View logs`.
15. Wait for QR code, generation.
16. Scan QR from `Whatsapp > Linked Devices > Join Multi Devices > Link Device`.
17. Hooray, Successfully Bot Setup Completed.

================================

## Installation For Termux User

#### Requirements:
* Android 7 or above
* Internet
* 2 Device (one to run termux, second to scan qr code from termux)
* Little bit IQ

Note: You can run bot in single device after successful setup, just copy whole/full `(valor-x.x.x-md)` folder from another device to yours and run that folder in termux.

(Here `x.x.x` is current version of a bot)
#### Additional Requirements:
* Download [`Termux.apk`](https://github.com/termux/termux-app/releases/download/v0.118.0/termux-app_v0.118.0+github-debug_universal.apk)
* Fork repo or download [`valor-x.x.x-md.zip`](https://github.com/DineshValor/valor/archive/refs/heads/v4.0.5-md.zip)

  (Here `x.x.x` is current version of a bot)
* Download [`node_modules.zip`](https://drive.google.com/file/d/1Ydcjt3PnGiOr9vL66dFC11V0sEywJb32/view?usp=drivesdk)

### Steps To Setup Bot Into Termux

##### Step 1
* Download and install `Termux` from above section `Additional Requirements` 1st point.
* Open `Termux`

##### Step 2
* Type mentioned below given commands one by one in `Termux`
```
$ termux-setup-storage
$ pkg update && pkg upgrade
$ pkg install git
$ pkg install nodejs-lts -y
$ pkg install ffmpeg -y
$ pkg install imagemagick -y
$ pkg install yarn
$ cd /storage/downloads
$ git clone https://github.com/DineshValor/valor
````
  (do not try to copy `$` along with command)

###### Error Step (ignore if no error in termux)
[ If Error in `git clone` command ]
* Download `valor` from above section `Additional Requirements` 2nd point.
* Extract `valor-x.x.x-md.zip` using any file manager into `downloads` folder.

(Here `x.x.x` is current version of a bot)

##### Step 3
```
$ cd /storage/downloads/valor-x.x.x-md
.../downloads/valor-x.x.x-md $ yarn
```

###### Error Step (ignore if no error in termux)
[ If Error in `yarn` command ]
* Download `node_modules` from above section `Additional Requirements` 3rd point.
* Extract `node_modules.zip` using any file manager into `valor-x.x.x-md` folder. For ex. (downloads/valor-x.x.x-md/node_modules)

  (Here `x.x.x` is current version of a bot)

Note: Extract `node_modules.zip` properly. Make sure only single folder with name `node_modules` create`, not one folder in another second folder like ❌`node_modules/node_modules`❌

##### Step 4
```
.../downloads/valor-x.x.x-md $ node .
  (Here `x.x.x` is current version of a bot)
```

###### Error Step (ignore if no error in termux)
[ If Error in `node .` command ]
* Check twice `node_modules.zip` file extracted properly at path `/downloads/valor-bot/node_modules/(400+ folder)`
* Raise issue at 'https://github.com/DineshValor/valor/issues'

##### Step 3
* Wait for bot starting...

##### Step 4
* Scan QR code from 2nd device. (Go to whatsapp > Linked Devices > Join `Multi Device Beta` > Click on `link device`)

###### Error Step (ignore if no error in termux)
[ If device vibrate but not connected ]
* Exit from termux. (necessary)
* Open file manager, go to `downloads > valor > session.data.json` & delete session.data.json file.

##### Step 5
```
$ cd /storage/downloads/valor
$ node .
```

##### Step 6
* Scan QR code, once connected, all bot plugins appear green in termux at first boot-up.

Caution:- If failed to scan QR code, then repeat steps.

================================

## How To Customise Message Display

### Message With Image-Location, Template-URL, Template-Call, Buttons
```
conn.sendHydrated(m.chat, 'text', 'footer', 'image.jpg', 'template-url', 'Template-Name', '0123456789', 'Template-CALL', [
      ['Donate', '/donasi'],
      ['Speed', '/ping'],
      ['Owner', '/owner']
], m, {asLocation: true})
```

### Remove Template Call Button
* Replace 'Template-Call' with 'null' both places to remove it.
```
conn.sendHydrated(m.chat, 'text', 'footer', 'image.jpg', 'template-url', 'Template-Name', null, null, [
      ['Donate', '/donasi'],
      ['Speed', '/ping'],
      ['Owner', '/owner']
    ], m, {asLocation: true})
```

### Remove Both Template URL & Call Button
* Replace 'Template-URL' & 'Template-Call' with 'null' each time both places to remove it.
```
conn.sendHydrated(m.chat, 'text', 'footer', 'image.jpg', null, null, null, null, [
      ['Donate', '/donasi'],
      ['Speed', '/ping'],
      ['Owner', '/owner']
    ], m, {asLocation: true})
```
### Add/Remove/Edit Buttons
* To remove button, delete `['button', '/button']` row.
* To add button, add `['button', '/button']` code line.
* To edit/rename button, edit/rename `button` name.
```
conn.sendHydrated(m.chat, 'text', 'footer', 'image.jpg', null, null, null, null, [
      ['Button¹', '/button¹'],
      ['Button²', '/button²'],
      ['Button³', '/button³]
    ], m, {asLocation: true})
```

### Add/Remove/Edit Image
* To remove image, replace 'image.jpg' with 'null'.
```
conn.sendHydrated(m.chat, 'text', 'footer', null, 'template-url', 'Template-Name', '0123456789', 'Template-CALL', [
      ['Donate', '/donasi'],
      ['Speed', '/ping'],
      ['Owner', '/owner']
], m, {asLocation: true})
```
* To change image, replace 'image.jpg' with custom 'image.jpg link'.
```
conn.sendHydrated(m.chat, 'text', 'footer', 'https://telegra.ph/file/fe5883c8011fd033e395c.jpg', 'template-url', 'Template-Name', '0123456789', 'Template-CALL', [
      ['Donate', '/donasi'],
      ['Speed', '/ping'],
      ['Owner', '/owner']
], m, {asLocation: true})
```

#### Note
* Use `conn.sendButton()` instead `conn.sendHydrated()` to clickable on `Read more` in the `footer` Menu Message.
```
conn.sendButton(m.chat, 'hi', text.trim(), 'https://telegra.ph/file/fe5883c8011fd033e395c.jpg', [
['menu', '/menu'],
['speed','/ping']
], m, { asLocation: true })
```

![Picsart_22-02-27_15-07-17-659](https://user-images.githubusercontent.com/98645523/155877063-1addb13c-f907-453f-8346-cc61ba2fad20.jpg)
