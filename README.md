# Svelte + TS + Vite

This template should help get you started developing with Svelte and TypeScript in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).

## Need an official Svelte framework?

Check out [SvelteKit](https://github.com/sveltejs/kit#readme), which is also powered by Vite. Deploy anywhere with its serverless-first approach and adapt to various platforms, with out of the box support for TypeScript, SCSS, and Less, and easily-added support for mdsvex, GraphQL, PostCSS, Tailwind CSS, and more.

## Technical considerations

**Why use this over SvelteKit?**

- It brings its own routing solution which might not be preferable for some users.
- It is first and foremost a framework that just happens to use Vite under the hood, not a Vite app.

This template contains as little as possible to get started with Vite + TypeScript + Svelte, while taking into account the developer experience with regards to HMR and intellisense. It demonstrates capabilities on par with the other `create-vite` templates and is a good starting point for beginners dipping their toes into a Vite + Svelte project.

Should you later need the extended capabilities and extensibility provided by SvelteKit, the template has been structured similarly to SvelteKit so that it is easy to migrate.

**Why `global.d.ts` instead of `compilerOptions.types` inside `jsconfig.json` or `tsconfig.json`?**

Setting `compilerOptions.types` shuts out all other types not explicitly listed in the configuration. Using triple-slash references keeps the default TypeScript setting of accepting type information from the entire workspace, while also adding `svelte` and `vite/client` type information.

**Why include `.vscode/extensions.json`?**

Other templates indirectly recommend extensions via the README, but this file allows VS Code to prompt the user to install the recommended extension upon opening the project.

**Why enable `allowJs` in the TS template?**

While `allowJs: false` would indeed prevent the use of `.js` files in the project, it does not prevent the use of JavaScript syntax in `.svelte` files. In addition, it would force `checkJs: false`, bringing the worst of both worlds: not being able to guarantee the entire codebase is TypeScript, and also having worse typechecking for the existing JavaScript. In addition, there are valid use cases in which a mixed codebase may be relevant.

**Why is HMR not preserving my local component state?**

HMR state preservation comes with a number of gotchas! It has been disabled by default in both `svelte-hmr` and `@sveltejs/vite-plugin-svelte` due to its often surprising behavior. You can read the details [here](https://github.com/rixo/svelte-hmr#svelte-hmr).

If you have state that's important to retain within a component, consider creating an external store which would not be replaced by HMR.

```ts
// store.ts
// An extremely simple external store
import { writable } from 'svelte/store'
export default writable(0)
```

---

Um deine Abhängigkeiten in einem Projekt zu aktualisieren und vorher zu prüfen, ob danach noch alles zusammenpasst, gibt es mehrere Schritte, die du befolgen kannst. Hier sind die allgemeinen Schritte, die für die meisten Paketmanager (wie npm oder yarn für Node.js) gelten:

### Schritte zum Aktualisieren und Überprüfen von Abhängigkeiten

#### 1. **Aktualisieren der Abhängigkeiten**

- **Mit npm**:

  ```bash
  npm update
  ```

- **Mit yarn**:
  ```bash
  yarn upgrade
  ```

Wenn du alle Abhängigkeiten auf die neuesten Versionen aktualisieren möchtest, kannst du dies mit:

- **Mit npm**:

  ```bash
  npm outdated
  npm install
  ```

- **Mit yarn**:
  ```bash
  yarn outdated
  yarn upgrade
  ```

Um sicherzustellen, dass alle Abhängigkeiten auf die neuesten Versionen aktualisiert werden (auch wenn diese Versionen nicht kompatibel mit den angegebenen Versionen in `package.json` sind), kannst du:

- **Mit npm**:

  ```bash
  npm update --save/--save-dev
  ```

- **Mit yarn**:
  ```bash
  yarn upgrade --latest
  ```

#### 2. **Erstellen eines neuen Branches für die Aktualisierung**

Bevor du die Aktualisierungen vornimmst, erstelle einen neuen Branch. Das ermöglicht dir, die Änderungen isoliert zu testen.

```bash
git checkout -b update-dependencies
```

#### 3. **Installieren der neuen Abhängigkeiten**

Nachdem du die Abhängigkeiten aktualisiert hast, installiere sie neu:

- **Mit npm**:

  ```bash
  npm install
  ```

- **Mit yarn**:
  ```bash
  yarn install
  ```

#### 4. **Überprüfen der Kompatibilität**

Führe deine Tests und Überprüfungen durch, um sicherzustellen, dass nach der Aktualisierung noch alles wie erwartet funktioniert.

- **Automatisierte Tests ausführen**:

  ```bash
  npm test
  ```

  oder

  ```bash
  yarn test
  ```

- **Linting und andere statische Analysen ausführen**:

  ```bash
  npm run lint
  ```

  oder

  ```bash
  yarn lint
  ```

- **Manuelle Tests**: Teste manuell die wesentlichen Teile deiner Anwendung, um sicherzustellen, dass keine Probleme auftreten.

#### 5. **Erstellen eines Pull Requests**

Wenn alle Tests erfolgreich sind und du sicher bist, dass die Aktualisierung keine Probleme verursacht, erstelle einen Pull Request für deinen `update-dependencies`-Branch.

1. **Push deinen Branch zu GitHub**:

   ```bash
   git push origin update-dependencies
   ```

2. **Erstelle einen Pull Request**:
   - Gehe zu deinem Repository auf GitHub.
   - Klicke auf die Schaltfläche "New pull request".
   - Wähle den `update-dependencies`-Branch als Quelle und `main` oder `master` als Ziel.
   - Klicke auf "Create pull request".

#### 6. **Zusammenführen des Pull Requests**

Nachdem der Pull Request überprüft und genehmigt wurde, kannst du ihn zusammenführen. Dies wird deine aktualisierten Abhängigkeiten in den Hauptzweig deines Projekts integrieren.

#### 7. **Branch bereinigen**

Nach dem Zusammenführen kannst du den `update-dependencies`-Branch sowohl lokal als auch remote löschen:

```bash
git branch -d update-dependencies
git push origin --delete update-dependencies
```

### Zusätzliche Tools und Best Practices

- **Dependabot**: GitHub bietet ein integriertes Tool namens Dependabot, das automatisch Pull Requests für Abhängigkeitsaktualisierungen erstellt. Du kannst es in deinem Repository aktivieren, um regelmäßig Updates zu erhalten.
- **CI/CD-Pipelines**: Nutze Continuous Integration (CI)-Tools wie GitHub Actions, Travis CI, oder Jenkins, um automatisch Tests und Builds auszuführen, wenn Abhängigkeiten aktualisiert werden. Dies stellt sicher, dass Probleme frühzeitig erkannt werden.
- **Lockfiles**: Verwalte Lockfiles (`package-lock.json` bei npm oder `yarn.lock` bei yarn), um sicherzustellen, dass alle Teammitglieder und CI-Server genau die gleichen Abhängigkeitsversionen verwenden.

Durch diese Schritte und Best Practices kannst du sicherstellen, dass deine Abhängigkeiten stets auf dem neuesten Stand sind und gleichzeitig die Integrität und Funktionalität deines Projekts bewahrt bleibt.
