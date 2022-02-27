## Installation For Heroku User

### Required Heroku Buildpack
* https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest
* https://github.com/DuckyTeam/heroku-buildpack-imagemagick
* heroku/nodejs
#### Note:
* Add buildpack in above showed sequence only.

### Steps To Setup Bot on Heroku
* Fork this github repository.
* Go to `Heroku.com`. [`Heroku Link`](https://www.heroku.com/)
* Create new app.
* Enter `App name` and click on `Create app`.
* Go to `Settings`.
* Click on `Add buildpack`.
* Add `ffmpeg`, `imagemagick`, `nodejs` and click on `Save changes` respectively. (Copy and paste from `Required for heroku`)
* Go to `Deploy` and click on `GitHub (connect to GitHub)`.
* Connect your `GitHub` account to `Heroku` account.
* After conncted with `GitHub`, scroll down search a repository `<your-username>/valor`.
* Click on `Connect`.
* Scroll down, and click on `Deploy Branch`. (It's take few minutes, br patience)
* Go to `Resources` and turn ON `worker: node .`
* Go to `More↑↓` and click on `View logs`.
* Wait for QR code, generation.
* Scan QR from `Whatsapp > Linked Devices > Join Multi Devices > Link Device`.
* Hooray, Successfully Bot Setup Completed.

─────────────────────────

## Installation For Termux User
### Requirement:
* Android 7 or above
* Internet
* 2 Device (one to scan qr code from whatsapp web)
* Little bit IQ

### Steps To Setup Bot Into Termux
* Download Termux. [`Download`](https://github.com/termux/termux-app/releases/download/v0.118.0/termux-app_v0.118.0+github-debug_universal.apk)
* Download `node_modules`. [`Download`](https://drive.google.com/file/d/1Ydcjt3PnGiOr9vL66dFC11V0sEywJb32/view?usp=drivesdk)
* Fork repo or download `valor-bot`. [`Download`](https://github.com/DineshValor/valor/archive/refs/heads/v4.0.5-md.zip)
* Open termux.
* Type below given commands one by one ↓↓
(do not try to copy `$` along with command 😂)
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
╭──────────────────
│[If Error in git clone]
│• download `valor-bot` from 3nd step.
│• extract `valor-bot.zip` using any file manager into `downloads` folder.
╰──────────────────
$ cd /storage/downloads/valor-bot
(Here replace `valor-bot` name with current download `valor-bot-v4.1.0` folder name)
```
* Extract `node_modules.zip` using any file manager into `valor-bot` folder. For ex. (downloads/valor-bot/node_modules)
* Continue in termux after `$ cd /storage/downloads/valor-bot`
```
$ node .
╭──────────────────
│[If Error in node .]
│• check twice node_modules
│• raise issue/discussion in the repository.
╰──────────────────
```
* Wait for bot starting...
* Scan QR code from 2nd device. (Go to whatsapp > Linked Devices > Join `Multi Device Beta` > Click on `link device`)
```
╭──────────────────
│[If device vibrate but not connected]
│• open file manager, go to `downloads > valor-bot > session.data.json` & delete session.data.json file.
│• exit from termux.
╰──────────────────
$ cd /storage/downloads/valor-bot
$ node .
```
* Scan QR code, once connected, appear green in termux at first boot-up.

*Caution:- If failed to scan QR code, then repeat steps.

─────────────────────────

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
