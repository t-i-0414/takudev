import React from 'react';
import { colorPaletteMapKeyList } from '~/consts';
import {
  LightThemeTemplate,
  DarkThemeTemplate,
} from '../../../../.storybook/ColorThemeTemplates';
import { SnsIcon } from '.';
import type { StoryObj, Meta } from '@storybook/react';

type StoryType = StoryObj<typeof SnsIcon>;

export default {
  title: 'Atoms/SnsIcon',
  component: SnsIcon,
  argTypes: {
    type: {
      control: 'select',
      options: ['github', 'twitter', 'facebook', 'linkedin', 'rss'],
    },
    colorName: { control: 'select', options: colorPaletteMapKeyList },
  },
  args: {
    type: 'github',
    colorName: 'subLabelColor',
  },
} as Meta<typeof SnsIcon>;

export const GithubLight: StoryType = {
  args: {
    type: 'github',
  },
  parameters: {
    screenshot: {
      variants: {
        hovered: {
          hover: 'a.icon',
        },
      },
    },
  },
  decorators: [
    (Story, context) => (
      <LightThemeTemplate>
        <div style={{ display: 'flex', padding: '20px' }}>
          <Story {...context.args} />
        </div>
      </LightThemeTemplate>
    ),
  ],
};

export const GithubDark: StoryType = {
  args: {
    type: 'github',
  },
  parameters: {
    screenshot: {
      variants: {
        hovered: {
          hover: 'a.icon',
        },
      },
    },
  },
  decorators: [
    (Story, context) => (
      <DarkThemeTemplate>
        <div style={{ display: 'flex', padding: '20px' }}>
          <Story {...context.args} />
        </div>
      </DarkThemeTemplate>
    ),
  ],
};

export const TwitterLight: StoryType = {
  args: {
    type: 'twitter',
  },
  parameters: {
    screenshot: {
      variants: {
        hovered: {
          hover: 'a.icon',
        },
      },
    },
  },
  decorators: [
    (Story, context) => (
      <LightThemeTemplate>
        <div style={{ display: 'flex', padding: '20px' }}>
          <Story {...context.args} />
        </div>
      </LightThemeTemplate>
    ),
  ],
};

export const TwitterDark: StoryType = {
  args: {
    type: 'twitter',
  },
  parameters: {
    screenshot: {
      variants: {
        hovered: {
          hover: 'a.icon',
        },
      },
    },
  },
  decorators: [
    (Story, context) => (
      <DarkThemeTemplate>
        <div style={{ display: 'flex', padding: '20px' }}>
          <Story {...context.args} />
        </div>
      </DarkThemeTemplate>
    ),
  ],
};

export const FacebookLight: StoryType = {
  args: {
    type: 'facebook',
  },
  parameters: {
    screenshot: {
      variants: {
        hovered: {
          hover: 'a.icon',
        },
      },
    },
  },
  decorators: [
    (Story, context) => (
      <LightThemeTemplate>
        <div style={{ display: 'flex', padding: '20px' }}>
          <Story {...context.args} />
        </div>
      </LightThemeTemplate>
    ),
  ],
};

export const FacebookDark: StoryType = {
  args: {
    type: 'facebook',
  },
  parameters: {
    screenshot: {
      variants: {
        hovered: {
          hover: 'a.icon',
        },
      },
    },
  },
  decorators: [
    (Story, context) => (
      <DarkThemeTemplate>
        <div style={{ display: 'flex', padding: '20px' }}>
          <Story {...context.args} />
        </div>
      </DarkThemeTemplate>
    ),
  ],
};

export const LinkedinLight: StoryType = {
  args: {
    type: 'linkedin',
  },
  parameters: {
    screenshot: {
      variants: {
        hovered: {
          hover: 'a.icon',
        },
      },
    },
  },
  decorators: [
    (Story, context) => (
      <LightThemeTemplate>
        <div style={{ display: 'flex', padding: '20px' }}>
          <Story {...context.args} />
        </div>
      </LightThemeTemplate>
    ),
  ],
};

export const LinkedinDark: StoryType = {
  args: {
    type: 'linkedin',
  },
  parameters: {
    screenshot: {
      variants: {
        hovered: {
          hover: 'a.icon',
        },
      },
    },
  },
  decorators: [
    (Story, context) => (
      <DarkThemeTemplate>
        <div style={{ display: 'flex', padding: '20px' }}>
          <Story {...context.args} />
        </div>
      </DarkThemeTemplate>
    ),
  ],
};

export const RssLight: StoryType = {
  args: {
    type: 'rss',
  },
  parameters: {
    screenshot: {
      variants: {
        hovered: {
          hover: 'a.icon',
        },
      },
    },
  },
  decorators: [
    (Story, context) => (
      <LightThemeTemplate>
        <div style={{ display: 'flex', padding: '20px' }}>
          <Story {...context.args} />
        </div>
      </LightThemeTemplate>
    ),
  ],
};

export const RssDark: StoryType = {
  args: {
    type: 'rss',
  },
  parameters: {
    screenshot: {
      variants: {
        hovered: {
          hover: 'a.icon',
        },
      },
    },
  },
  decorators: [
    (Story, context) => (
      <DarkThemeTemplate>
        <div style={{ display: 'flex', padding: '20px' }}>
          <Story {...context.args} />
        </div>
      </DarkThemeTemplate>
    ),
  ],
};
