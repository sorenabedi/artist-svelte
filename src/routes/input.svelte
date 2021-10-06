<script lang="ts">
	import { Input } from '$lib';
	import close from '$lib/svg/icons/close';
	import more from '$lib/svg/icons/more';
</script>

<div dir="rtl">
	<Input rtl color="default" type="text">ایمیل خود را وارد کنید</Input>
	<Input rtl color="primary" type="text">ایمیل خود را وارد کنید</Input>
	<Input rtl color="secondary" type="text">ایمیل خود را وارد کنید</Input>
	<Input rtl color="success" type="text">ایمیل خود را وارد کنید</Input>
	<Input rtl color="warning" type="text">ایمیل خود را وارد کنید</Input>
	<Input rtl color="danger" type="text">ایمیل خود را وارد کنید</Input>
	<Input rtl color="info" type="text">ایمیل خود را وارد کنید</Input>
</div>

<div dir="ltr">
	<Input shadow color="default" type="text">some text</Input>
	<Input shadow color="primary" type="text">some text</Input>
	<Input shadow color="secondary" type="text">some text</Input>
	<Input shadow color="success" type="text">some text</Input>
	<Input shadow color="warning" type="text">some text</Input>
	<Input shadow color="danger" icon={close} type="text">some text</Input>
	<Input shadow color="info" type="text">some text</Input>
</div>

<div dir="rtl">
	<Input variant="outline" rtl color="default" type="text">ایمیل خود را وارد کنید</Input>
	<Input variant="outline" rtl color="primary" type="text">ایمیل خود را وارد کنید</Input>
	<Input variant="outline" rtl color="secondary" type="text">ایمیل خود را وارد کنید</Input>
	<Input variant="outline" rtl color="success" type="text">ایمیل خود را وارد کنید</Input>
	<Input variant="outline" rtl color="warning" icon={more} shadow type="text"
		>ایمیل خود را وارد کنید</Input
	>
	<Input variant="outline" rtl color="danger" type="text">ایمیل خود را وارد کنید</Input>
	<Input variant="outline" rtl color="info" type="text">ایمیل خود را وارد کنید</Input>
</div>

<div dir="ltr">
	<Input shadow variant="outline" color="default" type="text">some text</Input>
	<Input shadow variant="outline" color="primary" type="text">some text</Input>
	<Input shadow variant="outline" color="secondary" type="text">some text</Input>
	<Input shadow variant="outline" color="success" type="text">some text</Input>
	<Input shadow variant="outline" color="warning" type="text">some text</Input>
	<Input shadow variant="outline" color="danger" type="text">some text</Input>
	<Input shadow variant="outline" color="info" type="text">some text</Input>
</div>
