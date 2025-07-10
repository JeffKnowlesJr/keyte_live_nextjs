# How to Set Up Redirects in AWS Amplify

Redirects are essential for SEO, user experience, and ensuring old URLs point to your new site structure. AWS Amplify provides a simple way to manage redirects and rewrites through its Console.

---

## 1. Access the Amplify Console

1. Go to the [AWS Amplify Console](https://console.aws.amazon.com/amplify/).
2. Select your Amplify app.

---

## 2. Navigate to Rewrites and Redirects

1. In the left sidebar, click on **App settings**.
2. Click on **Rewrites and redirects**.

---

## 3. Add a New Redirect Rule

1. Click **Add rule**.
2. Fill in the fields:
   - **Source address:** The old path you want to redirect (e.g., `/who-we-are/beau-keyte/index.htm`)
   - **Target address:** The new path (e.g., `/who-we-are/beau-keyte`)
   - **Type:** `301` (Permanent redirect)
   - **Status:** `200` or `301` (use `200` for rewrites, `301` for redirects)
   - **Include:** All
3. Click **Save**.

---

## 4. Bulk Upload Redirects (Optional)

If you have many redirects:
1. Click **Edit** in the Rewrites and redirects section.
2. Use the bulk editor to paste multiple rules in JSON format or the Amplify UI format.

---

## 5. Deploy Your Changes

1. After saving your rules, Amplify will automatically redeploy your app.
2. Test your redirects by visiting the old URLs in your browser or using `curl -I`.

---

## 6. Example Redirect Rules

| Source Address                                 | Target Address                      | Type | Status |
|------------------------------------------------|-------------------------------------|------|--------|
| `/who-we-are/beau-keyte/index.htm`             | `/who-we-are/beau-keyte`            | 301  | 200    |
| `/how-we-think/complete-lean-enterprise-book.htm` | `/how-we-think/complete-lean-enterprise-book` | 301  | 200    |
| `/contact-us/index.htm`                        | `/contact`                          | 301  | 200    |

---

## 7. Tips

- **Order matters:** Place specific rules above general ones.
- **Test thoroughly:** Use incognito mode or `curl` to avoid cached results.
- **Wildcard support:** You can use `*` in source addresses for pattern matching.

---

## 8. References

- [AWS Amplify Docs: Redirects and Rewrites](https://docs.aws.amazon.com/amplify/latest/userguide/redirects.html)
- [Amplify Console UI](https://console.aws.amazon.com/amplify/)

---

**If you need to automate or script this process, you can also use the Amplify CLI or CloudFormation, but the Console is easiest for most users.** 