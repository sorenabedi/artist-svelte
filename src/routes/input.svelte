<script lang="ts">
	import Input from '$lib/components/input';
	import closeIcon from '../lib/svg/close-icon';
	import moreIcon from '../lib/svg/more-icon';
</script>

<div>
	<Input color="default" type="text">ایمیل خود را وارد کنید</Input>
	<Input color="primary" type="text">ایمیل خود را وارد کنید</Input>
	<Input color="secondary" type="text">ایمیل خود را وارد کنید</Input>
	<Input color="success" type="text">ایمیل خود را وارد کنید</Input>
	<Input color="warning" type="text">ایمیل خود را وارد کنید</Input>
	<Input color="danger" type="text">ایمیل خود را وارد کنید</Input>
	<Input color="info" type="text">ایمیل خود را وارد کنید</Input>
</div>

<div>
	<Input shadow color="default" icon={closeIcon} type="text">some text</Input>
	<Input shadow color="primary" icon={closeIcon} type="text">some text</Input>
	<Input shadow color="secondary" icon={closeIcon} type="text">some text</Input>
	<Input shadow color="success" icon={closeIcon} type="text">some text</Input>
	<Input shadow color="warning" icon={closeIcon} type="text">some text</Input>
	<Input shadow color="danger" icon={closeIcon} type="text">some text</Input>
	<Input shadow color="danger" icon={closeIcon} type="text">some text</Input>
	<Input shadow color="info" icon={closeIcon} type="text">some text</Input>
</div>

<div>
	<Input variant="outline" color="default" icon={moreIcon} type="text">ایمیل خود را وارد کنید</Input
	>
	<Input variant="outline" color="primary" icon={moreIcon} type="text">ایمیل خود را وارد کنید</Input
	>
	<Input variant="outline" color="secondary" icon={moreIcon} type="text"
		>ایمیل خود را وارد کنید</Input
	>
	<Input variant="outline" color="success" icon={moreIcon} type="text">ایمیل خود را وارد کنید</Input
	>
	<Input variant="outline" color="warning" icon={moreIcon} type="text">ایمیل خود را وارد کنید</Input
	>
	<Input variant="outline" color="danger" icon={moreIcon} type="text">ایمیل خود را وارد کنید</Input>
	<Input variant="outline" color="info" icon={moreIcon} type="text">ایمیل خود را وارد کنید</Input>
</div>

<div>
	<Input shadow variant="outline" color="default" type="text">some text</Input>
	<Input shadow variant="outline" color="primary" type="text">some text</Input>
	<Input shadow variant="outline" color="secondary" type="text">some text</Input>
	<Input shadow variant="outline" color="success" type="text">some text</Input>
	<Input shadow variant="outline" color="warning" type="text">some text</Input>
	<Input shadow variant="outline" color="danger" type="text">some text</Input>
	<Input shadow variant="outline" color="info" type="text">some text</Input>
</div>
