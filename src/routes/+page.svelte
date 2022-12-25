<script>
	import Avatar from '@components/avatar/Avatar.svelte';
	import Button from '@components/button/Button.svelte';
	import ButtonGroup from '@components/button/ButtonGroup.svelte';
	import Heading from '@components/heading/Heading.svelte';
	import Typography from '@components/typography/Typography.svelte';
	import Container from '@layouts/Container.svelte';

	import { UserIcon } from 'svelte-feather-icons';
	import Section from '@layouts/Section.svelte';
	import AvatarGroup from '@components/avatar/AvatarGroup.svelte';
	import AvatarContainer from '@components/avatar/AvatarContainer.svelte';
</script>

<Section>
	<Container>
		<Heading level={1} color="primary">Okay bro.</Heading>
		<Heading level={2} color="weak">Okay bro.</Heading>
		<Heading level={3} color="weaker">Okay bro.</Heading>
		<Typography level="body">Okay bro.</Typography>
		<Typography level="caption">Okay bro.</Typography>
		<Typography class="mt-6" level="body">
			{`ABCDEFGHIJKLMNOPQRSTUVWXYZ`}
		</Typography>
		<Typography level="body">
			{`abcdefghijklmnopqrstuvwxyz`}
		</Typography>
		<Typography level="body">
			{`0123456789 !@#$%^&*()`}
		</Typography>
	</Container>
</Section>

<Section>
	<Container>
		<Button>Withdraw</Button>
		<Button palette="primary">Deposit</Button>
		<ButtonGroup class="mt-6">
			<Button>ABC</Button>
			<Button>ABC</Button>
			<Button>ABC</Button>
		</ButtonGroup>
	</Container>
</Section>

<Section>
	<Container class="space-y-4">
		<AvatarContainer>
			<Avatar size="sm">OR</Avatar>
			<div>
				<Typography weight="semibold">Olivia Rhye</Typography>
				<Typography color="weak">olivia@untitledui.com</Typography>
			</div>
		</AvatarContainer>
		<AvatarContainer>
			<Avatar size="md"><UserIcon /></Avatar>
			<div>
				<Typography weight="semibold">Olivia Rhye</Typography>
				<Typography color="weak">olivia@untitledui.com</Typography>
			</div>
		</AvatarContainer>
		<AvatarContainer>
			<Avatar size="lg" src="http://placekitten.com/96/96/" />
			<div>
				<Typography weight="semibold">Olivia Rhye</Typography>
				<Typography color="weak">olivia@untitledui.com</Typography>
			</div>
		</AvatarContainer>

		<AvatarGroup>
			<Avatar>OR</Avatar>
			<Avatar><UserIcon /></Avatar>
			<Avatar src="http://placekitten.com/96/96/" />
			<Avatar>+5</Avatar>
		</AvatarGroup>
	</Container>
</Section>
