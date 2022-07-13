export class Service {

  constructor(type = '', scope = '', subject = '', desc = '', urlimg = ''){
    this.type = type;
    this.scope = scope;
    this.subject = subject;
    this.desc = desc;
    this.urlimg = urlimg;
  }

  type: String;
  scope: String;
  subject: String;
  desc: String;
  urlimg: String;
}
