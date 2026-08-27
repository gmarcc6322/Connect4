# Deployment notes

## To npm

Publishing 

NOTE:

0. Check for package.json fields error

   ```
   yarn workspace 
   ```

1. Bump version

   ```
   yarn workspace
   ```
2. Commit + tag
    ```
    git commit -m "vx.x.x"
    git tag vx.x.x
    ```
3. Publish to npm
   ```
   yarn workspace @kenrick95/c4 npm publish
   ```
