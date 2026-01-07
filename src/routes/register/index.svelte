<script lang="ts">
	import { auth } from '$lib/supabase';
	import { user, username } from '$lib/store';
	import { goto } from '$app/navigation';

	let email = '';
	let password = '';
	let displayUsername = '';
	let loading = false;
	let message = '';

	async function handleRegister() {
		try {
			loading = true;
			message = '';

			const { data, error } = await auth.signUp({
				email,
				password,
				options: {
					data: {
						username: displayUsername
					}
				}
			});

			if (error) throw error;

			if (data.user) {
				user.set(data.user);
				username.set(displayUsername);
				goto('/profile');
			} else if (!data.session) {
				message = 'Check your email for the confirmation link.';
			}
		} catch (e: any) {
			message = e.message;
		} finally {
			loading = false;
		}
	}

	async function handleOAuth(provider: 'google' | 'facebook') {
		try {
			const { error } = await auth.signInWithOAuth({
				provider: provider
			});
			if (error) throw error;
		} catch (e: any) {
			message = e.message;
		}
	}
</script>

<svelte:head>
	<title>Code Breaker | Register</title>
</svelte:head>

<div class="container mx-auto px-4 pt-12 flex justify-center">
	<div class="card w-96 bg-neutral text-neutral-content shadow-xl">
		<div class="card-body items-center text-center">
			<h2 class="card-title text-3xl font-bold mb-4 text-primary">Create Account</h2>

			<div class="form-control w-full max-w-xs">
				<label class="label">
					<span class="label-text">Username</span>
				</label>
				<input
					type="text"
					placeholder="CodeBreaker123"
					class="input input-bordered w-full max-w-xs text-base-content"
					bind:value={displayUsername}
				/>
			</div>

			<div class="form-control w-full max-w-xs mt-4">
				<label class="label">
					<span class="label-text">Email</span>
				</label>
				<input
					type="email"
					placeholder="email@example.com"
					class="input input-bordered w-full max-w-xs text-base-content"
					bind:value={email}
				/>
			</div>

			<div class="form-control w-full max-w-xs mt-4">
				<label class="label">
					<span class="label-text">Password</span>
				</label>
				<input
					type="password"
					placeholder="********"
					class="input input-bordered w-full max-w-xs text-base-content"
					bind:value={password}
				/>
			</div>

			{#if message}
				<div class="alert alert-info shadow-lg mt-4 text-sm">
					<div>
						<span>{message}</span>
					</div>
				</div>
			{/if}

			<div class="card-actions justify-end mt-6 w-full">
				<button class="btn btn-primary w-full {loading ? 'loading' : ''}" on:click={handleRegister}>
					Sign Up
				</button>
			</div>

			<div class="divider">OR</div>

			<div class="flex flex-col gap-2 w-full">
				<button class="btn btn-outline gap-2" on:click={() => handleOAuth('google')}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-google"
						viewBox="0 0 16 16"
					>
						<path
							d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352-2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"
						/>
					</svg>
					Sign up with Google
				</button>
				<button class="btn btn-outline gap-2" on:click={() => handleOAuth('facebook')}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-facebook"
						viewBox="0 0 16 16"
					>
						<path
							d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
						/>
					</svg>
					Sign up with Facebook
				</button>
			</div>

			<div class="mt-4 text-sm opacity-80">
				Already have an account? <a href="/login" class="link link-primary">Login</a>
			</div>
		</div>
	</div>
</div>
