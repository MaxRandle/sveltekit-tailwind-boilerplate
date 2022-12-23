<script>
	import Button from '@components/button/Button.svelte';
	import ButtonGroup from '@components/button/ButtonGroup.svelte';
	import Heading from '@components/heading/Heading.svelte';
	import Typography from '@components/typography/Typography.svelte';
	import Container from '@layouts/Container.svelte';

	import Section from '@layouts/Section.svelte';
</script>

<Section>
	<Container>
		<Heading level={1} color="base">Okay bro.</Heading>
		<Heading level={2} color="weak">Okay bro.</Heading>
		<Heading level={3} color="weaker">Okay bro.</Heading>
		<Typography level="body">Okay bro.</Typography>
		<Typography level="caption">Okay bro.</Typography>

		<Button class="mt-6">Withdraw</Button>
		<Button palette="primary">Deposit</Button>
		<ButtonGroup class="mt-6">
			<Button>Withdraw</Button>
			<Button>Withdraw</Button>
			<Button>Withdraw</Button>
		</ButtonGroup>
	</Container>
</Section>
