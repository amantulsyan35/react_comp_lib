import React from 'react';
import {
  Avatar,
  AvatarMode,
  Alert,
  AlertTitle,
  AlertDescription,
  AlertIcon,
  AvatarBadge,
  IconBadge,
  Button,
  LinkButton,
  CardHero,
  CardTitle,
  CardSubTitle,
  CardBody,
  CardFooter,
  CardLink,
  Card,
  HeroTitle,
  HeroBody,
} from 'enkodu-ui';

const App = () => {
  const fn = () => {
    alert('hi');
  };

  return (
    <React.Fragment>
      <Avatar
        img='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
        name='Aman Tulsyan'
        size='xs'
      />
      <Avatar
        img='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
        name='Aman Tulsyan'
        size='sm'
      />
      <AvatarMode
        img='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
        name='Aman Tulsyan'
        size='xs'
        type='online'
      />
      <AvatarMode
        img='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
        name='Aman Tulsyan'
        size='sm'
        type='online'
      />
      <AvatarMode
        img='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
        name='Aman Tulsyan'
        size='xs'
        type='offline'
      />
      <AvatarMode
        img='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
        name='Aman Tulsyan'
        size='sm'
        type='offline'
      />

      <Alert mode='error'>
        <AlertIcon type='error' />
        <AlertTitle>Your browser is outdated!</AlertTitle>
        <AlertDescription>Your experience may be degraded.</AlertDescription>
      </Alert>
      <Alert mode='success'>
        <AlertIcon type='success' />
        <AlertTitle>Your browser is outdated!</AlertTitle>
        <AlertDescription>Your experience may be degraded.</AlertDescription>
      </Alert>
      <Alert mode='warning'>
        <AlertIcon type='warning' />
        <AlertTitle>Your browser is outdated!</AlertTitle>
        <AlertDescription>Your experience may be degraded.</AlertDescription>
      </Alert>
      <Alert mode='info'>
        <AlertIcon type='info' />
        <AlertTitle>Your browser is outdated!</AlertTitle>
        <AlertDescription>Your experience may be degraded.</AlertDescription>
      </Alert>
      <AvatarBadge num='5' type='xs'>
        <AvatarMode
          img='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
          name='Aman Tulsyan'
          size='xs'
          type='online'
        />
      </AvatarBadge>
      <AvatarBadge num='5' type='sm'>
        <AvatarMode
          img='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
          name='Aman Tulsyan'
          size='sm'
          type='online'
        />
      </AvatarBadge>
      <AvatarBadge num='5' type='md'>
        <Avatar
          img='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
          name='Aman Tulsyan'
          size='md'
          type='offline'
        />
      </AvatarBadge>
      <AvatarBadge num='5' type='lg'>
        <Avatar
          img='https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
          name='Aman Tulsyan'
          size='lg'
          type='offline'
        />
      </AvatarBadge>
      <IconBadge num='5' type='sm' />
      <IconBadge num='5' type='md' />
      <IconBadge num='5' type='lg' />
      <Button type='primary' size='xs'>
        button
      </Button>
      <Button type='secondary' size='xs'>
        button
      </Button>
      <Button type='primary' size='sm'>
        button
      </Button>
      <Button type='secondary' size='md'>
        button
      </Button>
      <Button onClick={fn} type='primary' size='lg'>
        button
      </Button>
      <Card>
        <CardTitle>CARD TITLE</CardTitle>
        <CardSubTitle>SUB HEADING</CardSubTitle>
        <CardBody>
          I am a very simple card. I am good at containing small bits of
          information. I am convenient because I require little markup to use
          effectively.
        </CardBody>
        <CardFooter>
          <CardLink text='THIS IS A LINK' src='https://www.google.com/' />
          <CardLink text='THIS IS A LINK' src='https://www.google.com/' />
        </CardFooter>
      </Card>
      <Card>
        <CardTitle>CARD TITLE</CardTitle>
        <CardBody>
          I am a very simple card. I am good at containing small bits of
          information. I am convenient because I require little markup to use
          effectively.
        </CardBody>
        <CardFooter>
          <CardLink text='THIS IS A LINK' src='https://www.google.com/' />
          <CardLink text='THIS IS A LINK' src='https://www.google.com/' />
        </CardFooter>
      </Card>
      <Card>
        <CardHero bg='https://media.gcflearnfree.org/content/5e31ca08bc7eff08e4063776_01_29_2020/ProgrammingIllustration.png' />
        <CardTitle>CARD TITLE</CardTitle>
        <CardSubTitle>SUB HEADING</CardSubTitle>
        <CardBody>
          I am a very simple card. I am good at containing small bits of
          information. I am convenient because I require little markup to use
          effectively.
        </CardBody>
        <CardFooter>
          <CardLink text='THIS IS A LINK' src='https://www.google.com/' />
          <CardLink text='THIS IS A LINK' src='https://www.google.com/' />
        </CardFooter>
      </Card>
    </React.Fragment>
  );
};

export default App;
