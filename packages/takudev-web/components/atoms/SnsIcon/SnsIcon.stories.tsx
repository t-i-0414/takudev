import React from 'react';

import { SnsIcon } from '.';

import type { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  LightThemeTemplate,
  DarkThemeTemplate,
} from '~/.storybook/ColorThemeTemplates';

export default {
  title: 'Atoms/SnsIcon',
  component: SnsIcon,
  argTypes: {
    type: {
      control: 'select',
      options: ['github', 'twitter', 'facebook', 'linkedin', 'rss'],
      defaultValue: 'github',
    },
    color: {
      control: 'color',
    },
  },
} as ComponentMeta<typeof SnsIcon>;

const Template: ComponentStory<typeof SnsIcon> = args => (
  <div style={{ display: 'flex', padding: '20px' }}>
    <SnsIcon {...args} />
  </div>
);

export const GithubLight: ComponentStory<typeof SnsIcon> = Template.bind({});
GithubLight.story = {
  decorators: [
    (Story, context) => (
      <LightThemeTemplate>
        <Story {...context.args} />
      </LightThemeTemplate>
    ),
  ],
  parameters: {
    screenshot: {
      variants: {
        hovered: {
          hover: 'a.icon',
        },
      },
    },
  },
};
GithubLight.args = {
  type: 'github',
};

export const GithubDark: ComponentStory<typeof SnsIcon> = Template.bind({});
GithubDark.story = {
  decorators: [
    (Story, context) => (
      <DarkThemeTemplate>
        <Story {...context.args} />
      </DarkThemeTemplate>
    ),
  ],
  parameters: {
    screenshot: {
      variants: {
        hovered: {
          hover: 'a.icon',
        },
      },
    },
  },
};
GithubDark.args = {
  type: 'github',
};

export const TwitterLight: ComponentStory<typeof SnsIcon> = Template.bind({});
TwitterLight.story = {
  decorators: [
    (Story, context) => (
      <LightThemeTemplate>
        <Story {...context.args} />
      </LightThemeTemplate>
    ),
  ],
  parameters: {
    screenshot: {
      variants: {
        hovered: {
          hover: 'a.icon',
        },
      },
    },
  },
};
TwitterLight.args = {
  type: 'twitter',
};

export const TwitterDark: ComponentStory<typeof SnsIcon> = Template.bind({});
TwitterDark.story = {
  decorators: [
    (Story, context) => (
      <DarkThemeTemplate>
        <Story {...context.args} />
      </DarkThemeTemplate>
    ),
  ],
  parameters: {
    screenshot: {
      variants: {
        hovered: {
          hover: 'a.icon',
        },
      },
    },
  },
};
TwitterDark.args = {
  type: 'twitter',
};

export const FacebookLight: ComponentStory<typeof SnsIcon> = Template.bind({});
FacebookLight.story = {
  decorators: [
    (Story, context) => (
      <LightThemeTemplate>
        <Story {...context.args} />
      </LightThemeTemplate>
    ),
  ],
  parameters: {
    screenshot: {
      variants: {
        hovered: {
          hover: 'a.icon',
        },
      },
    },
  },
};
FacebookLight.args = {
  type: 'facebook',
};

export const FacebookDark: ComponentStory<typeof SnsIcon> = Template.bind({});
FacebookDark.story = {
  decorators: [
    (Story, context) => (
      <DarkThemeTemplate>
        <Story {...context.args} />
      </DarkThemeTemplate>
    ),
  ],
  parameters: {
    screenshot: {
      variants: {
        hovered: {
          hover: 'a.icon',
        },
      },
    },
  },
};
FacebookDark.args = {
  type: 'facebook',
};

export const LinkedinLight: ComponentStory<typeof SnsIcon> = Template.bind({});
LinkedinLight.story = {
  decorators: [
    (Story, context) => (
      <LightThemeTemplate>
        <Story {...context.args} />
      </LightThemeTemplate>
    ),
  ],
  parameters: {
    screenshot: {
      variants: {
        hovered: {
          hover: 'a.icon',
        },
      },
    },
  },
};
LinkedinLight.args = {
  type: 'linkedin',
};

export const LinkedinDark: ComponentStory<typeof SnsIcon> = Template.bind({});
LinkedinDark.story = {
  decorators: [
    (Story, context) => (
      <DarkThemeTemplate>
        <Story {...context.args} />
      </DarkThemeTemplate>
    ),
  ],
  parameters: {
    screenshot: {
      variants: {
        hovered: {
          hover: 'a.icon',
        },
      },
    },
  },
};
LinkedinDark.args = {
  type: 'linkedin',
};

export const RssLight: ComponentStory<typeof SnsIcon> = Template.bind({});
RssLight.story = {
  decorators: [
    (Story, context) => (
      <LightThemeTemplate>
        <Story {...context.args} />
      </LightThemeTemplate>
    ),
  ],
  parameters: {
    screenshot: {
      variants: {
        hovered: {
          hover: 'a.icon',
        },
      },
    },
  },
};
RssLight.args = {
  type: 'rss',
};

export const RssDark: ComponentStory<typeof SnsIcon> = Template.bind({});
RssDark.story = {
  decorators: [
    (Story, context) => (
      <DarkThemeTemplate>
        <Story {...context.args} />
      </DarkThemeTemplate>
    ),
  ],
  parameters: {
    screenshot: {
      variants: {
        hovered: {
          hover: 'a.icon',
        },
      },
    },
  },
};
RssDark.args = {
  type: 'rss',
};
