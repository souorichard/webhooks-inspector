import { WebhooksListItem } from './webhooks-list-item'

export function WebhooksList() {
  return (
    <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-track-zinc-900 scrollbar-thumb-zinc-700">
      <div className="space-y-2 p-2">
        <WebhooksListItem />
        <WebhooksListItem />
        <WebhooksListItem />
        <WebhooksListItem />
      </div>
    </div>
  )
}
