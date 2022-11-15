import React from 'react';
import { colorPaletteMapKeyList } from '~/consts';
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
    },
    colorName: { control: 'select', options: colorPaletteMapKeyList },
  },
  args: {
    type: 'github',
    colorName: 'subLabelColor',
  },
} as ComponentMeta<typeof SnsIcon>;

const Template: ComponentStory<typeof SnsIcon> = args => (
  <div style={{ display: 'flex', padding: '20px' }}>
    <SnsIcon {...args} />
  </div>
);

export const GithubLight = Template.bind({});
GithubLight.decorators = [
  (Story, context) => (
    <LightThemeTemplate>
      <Story {...context.args} />
    </LightThemeTemplate>
  ),
];
GithubLight.parameters = {
  screenshot: {
    variants: {
      hovered: {
        hover: 'a.icon',
      },
    },
  },
};
GithubLight.args = {
  type: 'github',
};

export const GithubDark = Template.bind({});
GithubDark.decorators = [
  (Story, context) => (
    <DarkThemeTemplate>
      <Story {...context.args} />
    </DarkThemeTemplate>
  ),
];
GithubDark.parameters = {
  screenshot: {
    variants: {
      hovered: {
        hover: 'a.icon',
      },
    },
  },
};
GithubDark.args = {
  type: 'github',
};

export const TwitterLight = Template.bind({});
TwitterLight.decorators = [
  (Story, context) => (
    <LightThemeTemplate>
      <Story {...context.args} />
    </LightThemeTemplate>
  ),
];
TwitterLight.parameters = {
  screenshot: {
    variants: {
      hovered: {
        hover: 'a.icon',
      },
    },
  },
};
TwitterLight.args = {
  type: 'twitter',
};

export const TwitterDark = Template.bind({});
TwitterDark.decorators = [
  (Story, context) => (
    <DarkThemeTemplate>
      <Story {...context.args} />
    </DarkThemeTemplate>
  ),
];
TwitterDark.parameters = {
  screenshot: {
    variants: {
      hovered: {
        hover: 'a.icon',
      },
    },
  },
};
TwitterDark.args = {
  type: 'twitter',
};

export const FacebookLight = Template.bind({});
FacebookLight.decorators = [
  (Story, context) => (
    <LightThemeTemplate>
      <Story {...context.args} />
    </LightThemeTemplate>
  ),
];
FacebookLight.parameters = {
  screenshot: {
    variants: {
      hovered: {
        hover: 'a.icon',
      },
    },
  },
};
FacebookLight.args = {
  type: 'facebook',
};

export const FacebookDark = Template.bind({});
FacebookDark.decorators = [
  (Story, context) => (
    <DarkThemeTemplate>
      <Story {...context.args} />
    </DarkThemeTemplate>
  ),
];
FacebookDark.parameters = {
  screenshot: {
    variants: {
      hovered: {
        hover: 'a.icon',
      },
    },
  },
};
FacebookDark.args = {
  type: 'facebook',
};

export const LinkedinLight = Template.bind({});
LinkedinLight.decorators = [
  (Story, context) => (
    <LightThemeTemplate>
      <Story {...context.args} />
    </LightThemeTemplate>
  ),
];
LinkedinLight.parameters = {
  screenshot: {
    variants: {
      hovered: {
        hover: 'a.icon',
      },
    },
  },
};
LinkedinLight.args = {
  type: 'linkedin',
};

export const LinkedinDark = Template.bind({});
LinkedinDark.decorators = [
  (Story, context) => (
    <DarkThemeTemplate>
      <Story {...context.args} />
    </DarkThemeTemplate>
  ),
];
LinkedinDark.parameters = {
  screenshot: {
    variants: {
      hovered: {
        hover: 'a.icon',
      },
    },
  },
};
LinkedinDark.args = {
  type: 'linkedin',
};

export const RssLight = Template.bind({});
RssLight.decorators = [
  (Story, context) => (
    <LightThemeTemplate>
      <Story {...context.args} />
    </LightThemeTemplate>
  ),
];
RssLight.parameters = {
  screenshot: {
    variants: {
      hovered: {
        hover: 'a.icon',
      },
    },
  },
};
RssLight.args = {
  type: 'rss',
};

export const RssDark = Template.bind({});
RssDark.decorators = [
  (Story, context) => (
    <DarkThemeTemplate>
      <Story {...context.args} />
    </DarkThemeTemplate>
  ),
];
RssDark.parameters = {
  screenshot: {
    variants: {
      hovered: {
        hover: 'a.icon',
      },
    },
  },
};
RssDark.args = {
  type: 'rss',
};
