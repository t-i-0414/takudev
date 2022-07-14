import React, { useContext, useMemo } from 'react';
import isEqual from 'react-fast-compare';
import {
  hrefMap,
  lightColorPaletteMap,
  darkColorPaletteMap,
  colorPaletteMapKeyList,
} from '~/consts';
import { ColorContext } from '~/contexts';
import styles from './SnsIcon.module.scss';

type Props = {
  type: 'github' | 'twitter' | 'facebook' | 'linkedin' | 'rss';
  color?: typeof colorPaletteMapKeyList[number];
} & React.ComponentPropsWithoutRef<'a'>;

export const SnsIcon: React.FC<Props> = React.memo(
  ({ type, color, ...rest }) => {
    const { colorMode } = useContext(ColorContext);

    const svgFillColor = useMemo(() => {
      if (colorMode === 'darkMode') {
        return darkColorPaletteMap[color || 'sublabelColor'];
      }

      return lightColorPaletteMap[color || 'sublabelColor'];
    }, [color, colorMode]);

    const ariaLabel = useMemo(() => {
      switch (type) {
        case 'github':
          return "jump to taku's gitHub page";
        case 'twitter':
          return "jump to taku's twitter page";
        case 'facebook':
          return "jump to taku's facebook page";
        case 'linkedin':
          return "jump to taku's linkedin page";
        case 'rss':
          return "jump to taku's rss page";
        default:
          return '';
      }
    }, [type]);

    return (
      <a
        href={hrefMap[type]}
        className={`${styles['sns-icon']} icon`}
        target='_blank'
        rel='noreferrer'
        aria-label={ariaLabel}
        {...rest}
      >
        <div className={styles['svg-container']}>
          {type === 'github' && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='23.4'
              viewBox='0 0 24 23.4'
            >
              <path
                id='github-brands'
                d='M8.027,26.842c0,.1-.111.174-.252.174-.16.015-.271-.063-.271-.174s.111-.174.252-.174S8.027,26.731,8.027,26.842Zm-1.5-.218c-.034.1.063.208.208.237a.227.227,0,0,0,.3-.1c.029-.1-.063-.208-.208-.252a.248.248,0,0,0-.3.111Zm2.139-.082c-.14.034-.237.126-.223.237s.14.16.285.126.237-.126.223-.223S8.8,26.527,8.661,26.542ZM11.845,8A11.6,11.6,0,0,0,0,19.806,12.131,12.131,0,0,0,8.2,31.381c.619.111.837-.271.837-.585s-.015-1.955-.015-2.971c0,0-3.387.726-4.1-1.442,0,0-.552-1.408-1.345-1.771,0,0-1.108-.76.077-.745a2.554,2.554,0,0,1,1.868,1.248,2.558,2.558,0,0,0,3.527,1.011A2.689,2.689,0,0,1,9.827,24.5c-2.7-.3-5.434-.692-5.434-5.347A3.667,3.667,0,0,1,5.535,16.3a4.572,4.572,0,0,1,.126-3.285C6.673,12.7,9,14.319,9,14.319a11.431,11.431,0,0,1,6.077,0s2.327-1.626,3.339-1.306a4.57,4.57,0,0,1,.126,3.285,3.761,3.761,0,0,1,1.248,2.85c0,4.669-2.85,5.042-5.555,5.347a2.862,2.862,0,0,1,.823,2.245c0,1.631-.015,3.648-.015,4.045,0,.315.223.7.837.585A12.019,12.019,0,0,0,24,19.806,11.864,11.864,0,0,0,11.845,8ZM4.7,24.689c-.063.048-.048.16.034.252s.189.111.252.048.048-.16-.034-.252S4.766,24.626,4.7,24.689ZM4.181,24.3c-.034.063.015.14.111.189a.144.144,0,0,0,.208-.034c.034-.063-.015-.14-.111-.189C4.292,24.234,4.215,24.248,4.181,24.3Zm1.568,1.723c-.077.063-.048.208.063.3.111.111.252.126.315.048s.034-.208-.063-.3C5.956,25.956,5.811,25.942,5.748,26.019ZM5.2,25.308c-.077.048-.077.174,0,.285s.208.16.271.111a.221.221,0,0,0,0-.3c-.068-.111-.194-.16-.271-.1Z'
                transform='translate(0 -8)'
                fill={svgFillColor}
              />
            </svg>
          )}
          {type === 'twitter' && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='19.492'
              viewBox='0 0 24 19.492'
            >
              <path
                id='twitter-brands'
                d='M21.533,52.94c.015.213.015.426.015.64A13.9,13.9,0,0,1,7.553,67.574,13.9,13.9,0,0,1,0,65.366a10.174,10.174,0,0,0,1.188.061,9.851,9.851,0,0,0,6.107-2.1,4.927,4.927,0,0,1-4.6-3.411,6.2,6.2,0,0,0,.929.076,5.2,5.2,0,0,0,1.294-.167A4.919,4.919,0,0,1,.975,55v-.061a4.954,4.954,0,0,0,2.223.624A4.926,4.926,0,0,1,1.675,48.98a13.981,13.981,0,0,0,10.142,5.147A5.553,5.553,0,0,1,11.7,53a4.923,4.923,0,0,1,8.513-3.365,9.684,9.684,0,0,0,3.122-1.188,4.906,4.906,0,0,1-2.162,2.711A9.861,9.861,0,0,0,24,50.4,10.573,10.573,0,0,1,21.533,52.94Z'
                transform='translate(0 -48.082)'
                fill={svgFillColor}
              />
            </svg>
          )}
          {type === 'facebook' && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='23.855'
              viewBox='0 0 24 23.855'
            >
              <path
                id='facebook-brands'
                d='M32,20A12,12,0,1,0,18.125,31.855V23.469H15.077V20h3.048V17.356c0-3.007,1.79-4.668,4.532-4.668a18.468,18.468,0,0,1,2.686.234v2.952H23.83a1.734,1.734,0,0,0-1.955,1.874V20H25.2l-.532,3.469h-2.8v8.386A12,12,0,0,0,32,20Z'
                transform='translate(-8 -8)'
                fill={svgFillColor}
              />
            </svg>
          )}
          {type === 'linkedin' && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
            >
              <path
                id='linkedin-brands'
                d='M22.286,32H1.709A1.722,1.722,0,0,0,0,33.73V54.27A1.722,1.722,0,0,0,1.709,56H22.286A1.726,1.726,0,0,0,24,54.27V33.73A1.726,1.726,0,0,0,22.286,32ZM7.254,52.571H3.7V41.118H7.259V52.571ZM5.475,39.554a2.063,2.063,0,1,1,2.063-2.062A2.063,2.063,0,0,1,5.475,39.554ZM20.588,52.571H17.03V47c0-1.329-.027-3.037-1.848-3.037-1.854,0-2.137,1.446-2.137,2.941v5.668H9.488V41.118H12.9v1.564h.048a3.747,3.747,0,0,1,3.37-1.848c3.6,0,4.27,2.373,4.27,5.459Z'
                transform='translate(0 -32)'
                fill={svgFillColor}
              />
            </svg>
          )}
          {type === 'rss' && (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
            >
              <path
                id='rss-solid'
                d='M6.861,52.569a3.431,3.431,0,1,1-3.431-3.431,3.431,3.431,0,0,1,3.431,3.431Zm9.41,2.531A16.29,16.29,0,0,0,.9,39.728a.856.856,0,0,0-.9.857V43.16a.858.858,0,0,0,.8.858A12,12,0,0,1,11.982,55.2a.858.858,0,0,0,.858.8h2.575A.856.856,0,0,0,16.272,55.1ZM24,55.116A24.017,24.017,0,0,0,.884,32,.856.856,0,0,0,0,32.858v2.575a.86.86,0,0,0,.828.857A19.718,19.718,0,0,1,19.71,55.172a.86.86,0,0,0,.857.828h2.575A.856.856,0,0,0,24,55.116Z'
                transform='translate(0 -32)'
                fill={svgFillColor}
              />
            </svg>
          )}
        </div>
      </a>
    );
  },
  isEqual,
);
SnsIcon.displayName = 'SnsIcon';
