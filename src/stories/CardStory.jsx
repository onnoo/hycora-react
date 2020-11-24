import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '../components/Card';
import CardTitle from '../components/CardTitle';
import ProgressBar from '../components/ProgressBar';
import Badge from '../components/Badge';
import InlineList from '../components/InlineList';
import CardButton from '../components/CardButton';
import Spacing from '../components/Spacing';

storiesOf('Card', module)
  .addWithJSX('default', () => <Card>contents</Card>)
  .addWithJSX('title', () => (
    <Card>
      <CardTitle>제 1 열람실</CardTitle>
    </Card>
  ))
  .addWithJSX('progrssBar', () => (
    <Card>
      <CardTitle>제 1 열람실</CardTitle>
      <ProgressBar progress={66} />
    </Card>
  ))
  .addWithJSX('badge', () => (
    <Card>
      <CardTitle>제 1 열람실</CardTitle>
      <ProgressBar progress={66} />
      <Spacing p="20px 0 20px 0">
        <InlineList>
          <Badge value={11} secondary />
          <Badge value={80} />
          <Badge value={69} primary />
        </InlineList>
      </Spacing>
    </Card>
  ))
  .addWithJSX('button', () => (
    <Card>
      <CardTitle>제 1 열람실</CardTitle>
      <ProgressBar progress={66} />
      <Spacing p="20px 0 20px 0">
        <InlineList>
          <Badge value={11} secondary />
          <Badge value={80} />
          <Badge value={69} primary />
        </InlineList>
      </Spacing>
      <InlineList>
        <CardButton label="입실" primary />
        <CardButton label="퇴실" secondary />
      </InlineList>
    </Card>
  ));
