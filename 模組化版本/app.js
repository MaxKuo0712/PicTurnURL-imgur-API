import { PicTurnURL } from './PicTurnURLService.js';

const actionBtn = document.getElementById("myBtn");
const uploadInput = document.getElementById("upload");

let PicTurnUrl = new PicTurnURL();

uploadInput.addEventListener("change", () => {
    console.log(uploadInput);
    PicTurnUrl.setuploadFile(uploadInput.files[0]);
    PicTurnUrl.setfileName(PicTurnUrl.uploadFile.name);
    PicTurnUrl.setfileSize(Math.floor(PicTurnUrl.uploadFile.size * 0.001) + 'KB');
    PicTurnUrl.setfileThumbnail(window.URL.createObjectURL(PicTurnUrl.uploadFile));
    PicTurnUrl.setfileTitle(PicTurnUrl.uploadFile.name);
    PicTurnUrl.setfileDesc(PicTurnUrl.uploadFile.name);
});

actionBtn.addEventListener("click", () => {
    const uploadFile = PicTurnUrl.getuploadFile();
    const fileTitle = PicTurnUrl.getfileTitle();
    const fileDesc = PicTurnUrl.getfileDesc();
    const settings = PicTurnUrl.submit(uploadFile, fileTitle, fileDesc);

    $.ajax(settings).done(function (res) {
        console.log(JSON.parse(res).data.link); // 可以看見上傳成功後回的值
        alert('上傳完成');
    });
});