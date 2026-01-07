<script lang="ts">
	import { auth } from '$lib/supabase';

	let email = '';
	let loading = false;
	let message = '';
	let success = false;

	async function handleResetPassword() {
		try {
			loading = true;
			message = '';
			success = false;

			const { error } = await auth.resetPasswordForEmail(email, {
				redirectTo: `${window.location.origin}/update-password`
			});

			if (error) throw error;

			success = true;
			message = 'Password reset email sent! Check your inbox.';
		} catch (e: any) {
			message = e.message;
		} finally {
			loading = false;
		}
	}
</script>

<svelte:head>
	<title>Code Breaker | Reset Password</title>
</svelte:head>

<div class="container mx-auto px-4 pt-12 flex justify-center">
	<div class="card w-96 bg-neutral text-neutral-content shadow-xl">
		<div class="card-body items-center text-center">
			<h2 class="card-title text-3xl font-bold mb-4 text-primary">Reset Password</h2>
			<p class="text-sm opacity-75 mb-4">
				Enter your email address and we'll send you a link to reset your password.
			</p>

			<div class="form-control w-full max-w-xs">
				<label class="label">
					<span class="label-text">Email</span>
				</label>
				<input
					type="email"
					placeholder="email@example.com"
					class="input input-bordered w-full max-w-xs text-base-content"
					bind:value={email}
					disabled={success}
				/>
			</div>

			{#if message}
				<div class="alert {success ? 'alert-success' : 'alert-error'} shadow-lg mt-4 text-sm">
					<div>
						<span>{message}</span>
					</div>
				</div>
			{/if}

			<div class="card-actions justify-end mt-6 w-full">
				<button
					class="btn btn-primary w-full {loading ? 'loading' : ''}"
					on:click={handleResetPassword}
					disabled={success}
				>
					Send Reset Link
				</button>
			</div>

			<div class="mt-4 text-sm opacity-80">
				<a href="/login" class="link link-primary">← Back to Login</a>
			</div>
		</div>
	</div>
</div>
