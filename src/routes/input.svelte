<script lang="ts">
	import Input from '$lib/components/input';
	import close from '../lib/svg/icons/close';
	import more from '../lib/svg/icons/more';
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
	<Input shadow color="default" icon={close} type="text">some text</Input>
	<Input shadow color="primary" icon={close} type="text">some text</Input>
	<Input shadow color="secondary" icon={close} type="text">some text</Input>
	<Input shadow color="success" icon={close} type="text">some text</Input>
	<Input shadow color="warning" icon={close} type="text">some text</Input>
	<Input shadow color="danger" icon={close} type="text">some text</Input>
	<Input shadow color="danger" icon={close} type="text">some text</Input>
	<Input shadow color="info" icon={close} type="text">some text</Input>
</div>

<div>
	<Input variant="outline" color="default" icon={more} type="text">ایمیل خود را وارد کنید</Input>
	<Input variant="outline" color="primary" icon={more} type="text">ایمیل خود را وارد کنید</Input>
	<Input variant="outline" color="secondary" icon={more} type="text">ایمیل خود را وارد کنید</Input>
	<Input variant="outline" color="success" icon={more} type="text">ایمیل خود را وارد کنید</Input>
	<Input variant="outline" color="warning" icon={more} type="text">ایمیل خود را وارد کنید</Input>
	<Input variant="outline" color="danger" icon={more} type="text">ایمیل خود را وارد کنید</Input>
	<Input variant="outline" color="info" icon={more} type="text">ایمیل خود را وارد کنید</Input>
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
