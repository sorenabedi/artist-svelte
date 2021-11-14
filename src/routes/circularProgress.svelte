<script lang="ts">
	import Gauge from '$lib/components/circularProgress';

	const RandomPercentage = () => {
		return Math.random() * 100;
	};
</script>

<div>
	<Gauge size="6rem" color="primary" />
	<Gauge size="6rem" color="secondary" />
	<Gauge size="6rem" color="danger" on:change={(e) => console.log(e.target)} />
	<Gauge size="6rem" color="default" />
	<Gauge size="6rem" color="info" />
	<Gauge size="6rem" color="success" />
	<Gauge size="6rem" color="warning" />
</div>
<div>
	<Gauge size="6rem" color="primary" percentage={RandomPercentage()} />
	<Gauge size="6rem" color="secondary" percentage={RandomPercentage()} />
	<Gauge size="6rem" color="danger" percentage={RandomPercentage()} />
	<Gauge size="6rem" color="default" percentage={RandomPercentage()} />
	<Gauge size="6rem" color="info" percentage={RandomPercentage()} />
	<Gauge size="6rem" color="success" percentage={RandomPercentage()} />
	<Gauge size="6rem" color="warning" percentage={RandomPercentage()} />
</div>
<div>
	<Gauge size="6rem" color="primary" percentage={RandomPercentage()} showPercentage />
	<Gauge size="6rem" color="secondary" percentage={RandomPercentage()} showPercentage />
	<Gauge size="6rem" color="danger" percentage={RandomPercentage()} showPercentage />
	<Gauge size="6rem" color="default" percentage={RandomPercentage()} showPercentage />
	<Gauge size="6rem" color="info" percentage={RandomPercentage()} showPercentage />
	<Gauge size="6rem" color="success" percentage={RandomPercentage()} showPercentage />
	<Gauge size="6rem" color="warning" percentage={RandomPercentage()} showPercentage />
</div>
<div>
	<Gauge size="6rem" color="primary" percentage={RandomPercentage()} noSpin showPercentage />
	<Gauge size="6rem" color="secondary" percentage={RandomPercentage()} noSpin showPercentage />
	<Gauge size="6rem" color="danger" percentage={RandomPercentage()} noSpin showPercentage />
	<Gauge size="6rem" color="default" percentage={RandomPercentage()} noSpin showPercentage />
	<Gauge size="6rem" color="info" percentage={RandomPercentage()} noSpin showPercentage />
	<Gauge size="6rem" color="success" percentage={RandomPercentage()} noSpin showPercentage />
	<Gauge size="6rem" color="warning" percentage={RandomPercentage()} noSpin showPercentage />
</div>

<style>
	div {
		display: block;
	}
</style>
