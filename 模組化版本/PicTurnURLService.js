export class PicTurnURL {
    token = 'Your imgur Token';

    constructor() {
        this.uploadFile = null;
        this.fileName = null;
        this.fileSize = null;
        this.fileThumbnail = null;
        this.fileTitle = null;
        this.fileDesc = null;
    }

    clearAll() {
        this.uploadFile = null;
        this.fileName = null;
        this.fileSize = null;
        this.fileThumbnail = null;
        this.fileTitle = null;
        this.fileDesc = null;
    }

    submit(uploadFile, fileTitle, fileDesc) {
        let settings = {
            async: true,
            crossDomain: true,
            processData: false,
            contentType: false,
            type: 'POST',
            url: 'https://api.imgur.com/3/image',
            headers: {
                Authorization: 'Bearer ' + this.token
            },
            mimeType: 'multipart/form-data'
        };

        let form = new FormData();
        form.append('image', uploadFile);
        form.append('title', fileTitle);
        form.append('description', fileDesc);

        settings.data = form;

        return settings;
    }

    setuploadFile(uploadFile) {
        this.uploadFile = uploadFile;
    }
    setfileName(fileName) {
        this.fileName = fileName;
    }
    setfileSize(fileSize) {
        this.fileSize = fileSize;
    }
    setfileThumbnail(fileThumbnail) {
        this.fileThumbnail = fileThumbnail;
    }
    setfileTitle(fileTitle) {
        this.fileTitle = fileTitle;
    }
    setfileDesc(fileDesc) {
        this.fileDesc = fileDesc;
    }

    getuploadFile() {
        return this.uploadFile;
    }
    getfileName() {
        return this.fileName;
    }
    getfileSize() {
        return this.fileSize;
    }
    getfileThumbnail() {
        return this.fileThumbnail;
    }
    getfileTitle() {
        return this.fileTitle;
    }
    getfileDesc() {
        return this.fileDesc;
    }
}