import type {
  DialogProviderInst,
  LoadingBarProviderInst,
  MessageProviderInst,
  NotificationProviderInst,
} from 'naive-ui'

declare global {
  interface Window {
    $message: MessageProviderInst
    $notification: NotificationProviderInst
    $dialog: DialogProviderInst
    $loadingBar: LoadingBarProviderInst
  }
}
