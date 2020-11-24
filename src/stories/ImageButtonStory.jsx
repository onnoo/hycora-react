import React from 'react';
import { storiesOf } from '@storybook/react';

import ImageButton from '../components/ImageButton';

storiesOf('ImageButton', module)
  .addWithJSX('default', () => (
    <ImageButton src="https://placehold.it/256" label="버튼" />
  ))
  .addWithJSX('좌석반납', () => (
    <ImageButton src="/images/icon_exit.png" label="좌석반납" />
  ))
  .addWithJSX('좌석연장', () => (
    <ImageButton src="/images/icon_update.png" label="좌석연장" />
  ))
  .addWithJSX('모바일 배정확정', () => (
    <ImageButton src="/images/icon_mobile.png" label="모바일 배정확정" />
  ));
