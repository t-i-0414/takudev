import React from 'react';
import isEqual from 'react-fast-compare';

import { ProfileCardView } from './ProfileCardView';

export const ProfileCard: React.FC = React.memo(
  () => <ProfileCardView />,
  isEqual,
);
ProfileCard.displayName = 'ProfileCard';
