Next.js 13.5.1 から `context.req.cookies` の挙動が変わったので検証するレポジトリ

## 13.5.1 まで

「getServerSideProps」実行時に、ヘッダーのcookieが設定される

![image](https://github.com/kaito01234/verify-nextjs-13.5.6/assets/43839796/9da2b55a-7108-46fa-84de-55d903348298)

## 13.5.1 以降

`context.req.cookies` 参照時に、ヘッダーのcookieが設定される？

### `context.req.cookies` 参照前

![image](https://github.com/kaito01234/verify-nextjs-13.5.6/assets/43839796/0c042e05-51a8-4123-afa2-286cd671daa3)

### `context.req.cookies` 参照後

![image](https://github.com/kaito01234/verify-nextjs-13.5.6/assets/43839796/d6aa1b6b-7531-47af-9d87-a940843ab67a)

### token設定前に `context.req.cookies` 参照

![image](https://github.com/kaito01234/verify-nextjs-13.5.6/assets/43839796/02055b3e-e6af-40ff-b895-8ec332193997)
