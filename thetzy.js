/*
βΊ Create By Radit
βΊ Base Ori Radit

π₯ KALAU MAU RENAME TARO CREDITS GUA : ππππππ πͺπΉπ¨πΊπ― ππππππππ */

const fs = require('fs')
const chalk = require('chalk')
//=================================================//
global.autorecording = true //status auto merekam ( auto record )
global.autoketik = true //status auto mengetik (auto typing)
global.available = true //status online (online)
global.autred = false
//βββββγ Set Random Image Menu γβββββ//
//gausah di apaΒ² in!
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
//=================================================//
//βββββγ Set Kebutuhan Button & Kontak γβββββ//
//ubah aja kalau ada yang gapunya gsh di hps anggap aja credits :), note tanda ' gausah di hapus!
global.youtube = 'https://youtube.com/c/PakTzy'
global.ig = 'https://www.instagram.com/reel/Cc915M2JRzd/?igshid=YmMyMTA2M2Y='
global.mygc = 'https://chat.whatsapp.com/Gv1D2edigPo1Jrqum2Ekou'
global.myweb = 'https://youtube.com/playlist?list=PLfnx8zXCmgN0FtxAZDhJMo-cHJozuvZGz'
global.linkgrupss = "https://chat.whatsapp.com/Jh7zaCSnPCBC4gdYOEVm0K"
global.linkpro = 'mailto:support@whatsapp.com?subject=Deactivate%20My%20Account%20Number&body=Please%20Deactivate%20The%20My%20Account%20Number%20%2B62XXXXXXXX%20Immediately%20Because%20The%20Number%20Has%20Been%20Lost'
global.linkun = 'mailto:support@whatsapp.com?subject=Account%20Locked&body=Good%20Afternoon%20I%20Have%20A%20Problem%20Account%20Is%20Locked,%20I%20Spam%20Nothing%20But%20My%20Account%20Suddenly%20Locked,%20Please%20Reactivate%20This%20Number:%20[+62xxxxxx]'
global.email = 'TheZyrenn@gmail.com'
global.ntidel = ['120363043965529911@g.us']
global.wlcm = []
global.wlcmm = []
global.ntnsfw = []
global.region = 'Indonesia'
global.f1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.f2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.f3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.f4 = 'application/zip'
global.f5 = 'application/pdf'
global.f6 = 'application/vnd.android.package-archive'
//βββββγ Set Nama Own & Bot γβββββ//
global.ownername = 'γ Ari Offc Ογ½οΈ' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.botname = '[β«Ήβ«Ί - γ MrX-SkY Ογ½οΈ]' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.footer = 'Ari Offc Ο' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.sessionnye = 'multi'
/*Di bagian sini karna gw bingung jadi gw bikin 2 type session aj
1.session multi (session multi adalah session folder) 
2.session single (session single adalah session file) 
*/
//=================================================//
// Other
global.owner = ['6288294533698']
global.premium = ['6288294533698']
global.packname = 'Ari Offc Ο'
global.ownerr = ['γ Ari Offc Ογ½οΈ']
global.author = '[β«Ήβ«Ί - γ Ari Offc Ογ½οΈ]'
global.prefa = ['','!','.',',','π€','πΏ']
global.sp = 'β­'
global.mess = {
nsfw: 'β οΈ _*Fitur NSFW tidak diaktifkan, chat admin grup supaya diaktifkan*_',
wait: 'β³ _*Loading...*_',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
//=================================================//
global.limitawal = {
    premium: "Infinity",
    free: 100
}
   global.rpg = {
   darahawal: 100,
   besiawal: 5,
   goldawal: 1,
   emeraldawal: 1,
   umpanawal: 1,
   potionawal: 1
}
global.timeBug = 1 // 1 Menit
//=================================================//
global.thumb = { url: 'https://telegra.ph/file/c2e84a4776ee6c47aa3a5.jpg' }
global.visoka = { url: 'https://a.uguu.se/fVFNCwix.mp4' }
global.menuimg = { url: 'https://a.uguu.se/fVFNCwix.mp4' }
global.zy = { url: 'https://telegra.ph/file/842cc1a7658a1c2b94c0c.jpg' }
global.log0 = fs.readFileSync("./basetzy/gambarnye/thezyren.jpg")
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
