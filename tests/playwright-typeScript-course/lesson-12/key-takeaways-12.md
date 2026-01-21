### POM API && OTHER POM Styles

#### POM cho API
- Tổ chức test API ở dạng POM để dễ quản lý hơn
- Concept tương tự POM UI:

    - Tên class: TodoApiPage
    - Thuộc tính: request:
    APIRequestContext

```typescript
import { APIRequestContext } from '@playwright'

export class TodoApiPage {
    request: APIRequestContext;

    constructor (request: APIRequestContext) {
        this.request = request;
    }

}

```

20': 57


#### Một số biến thể của POM


#### Async && await