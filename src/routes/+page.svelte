<script>
	import Button from '@components/button/Button.svelte';
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
		<Button class="mt-10">Withdraw</Button>
		<Button disabled>Withdraw</Button>
		<Button palette="primary">Deposit</Button>
		<Button palette="primary" disabled>Deposit</Button>
	</Container>
</Section>
