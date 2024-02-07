# 🚀 Circle Partner Navigator Backend

The Circle Partner Navigator represents all Partners of Open Telekom Cloud which are present on our homepage. This Backend is based on Strapi.

## Run the Backend

```
npm run start
```

## Update the Backend

1. Create PR and Merge it
2. Check Zuul log: `job-output.txt` and search for **tagged** to get the tag name which is needed for the next step. The tag_name should start with `change_`.
3. Update kustomize config and merge it under:
https://github.com/opentelekomcloud-infra/system-config/blob/main/kubernetes%2Fcircle-partner-navigator%2Foverlays%2Fprod%2Fkustomization.yaml#L14

-> The update takes up to 10 minutes.
