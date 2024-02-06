# 🚀 Circle Partner Navigator Backend

The Circle Partner Navigator represents all Partners of Open Telekom Cloud which are present on our homepage. This Backend is based on Strapi.

## Run the Backend

```
npm run start
```

## Update the Backend

1. Create PR and Merge it
2. Update kustomize config under:
https://github.com/opentelekomcloud-infra/system-config/blob/main/kubernetes%2Fcircle-partner-navigator%2Foverlays%2Fprod%2Fkustomization.yaml#L14

Use for that purpose the tag which is shown by Zuul under:
