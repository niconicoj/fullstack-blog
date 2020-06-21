export interface MailTemplate<T> {
  recipient: string,
  subject: string,
  template: string,
  data: T
}

export interface MailParams<T> {
  recipient: string,
  locale:string,
  data: T
}