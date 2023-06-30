import React from 'react';
import isEqual from 'react-fast-compare';
import { colorModeMap, colorModeLocalStorageKey } from '~/consts';
import { getCustomColorPropertySettingText } from '~/lib';

export const ColorThemeScript: React.FC = React.memo(
  () => (
    <script
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: `
        (function() {
          var storageKey = '${colorModeLocalStorageKey}';

          function setInitialColorModeOnDocumentBody(colorMode) {
            document.documentElement.style.setProperty(
              '--color-mode-switch-button-translate',
              colorMode === '${colorModeMap.darkMode}'
                ? 'translate(-12%, -50%)'
                : 'translate(-88%, -50%)',
            );
            ${getCustomColorPropertySettingText()}
          }

          var preferDarkQuery = '(prefers-color-scheme: dark)';
          var mql = window.matchMedia(preferDarkQuery);
          var supportsColorSchemeQuery = mql.media === preferDarkQuery;
          var localStorageTheme = null;

          try {
            localStorageTheme = localStorage.getItem(storageKey);
          } catch (err) {}

          var localStorageExists = localStorageTheme !== null;

          if (localStorageExists) {
            localStorageTheme = JSON.parse(localStorageTheme);
          }

          if (localStorageExists) {
            setInitialColorModeOnDocumentBody(localStorageTheme);
          } else if (supportsColorSchemeQuery) {
            var _colorMode = mql.matches ? '${colorModeMap.darkMode}' : '${
          colorModeMap.lightMode
        }';

            setInitialColorModeOnDocumentBody(_colorMode);
            localStorage.setItem(storageKey, JSON.stringify(_colorMode));
          } else {
            var _colorMode = '${colorModeMap.lightMode}';

            setInitialColorModeOnDocumentBody(_colorMode);
            localStorage.setItem(storageKey, JSON.stringify(_colorMode));
          }
        })();
    `,
      }}
    />
  ),
  isEqual,
);
ColorThemeScript.displayName = 'ColorThemeScript';
