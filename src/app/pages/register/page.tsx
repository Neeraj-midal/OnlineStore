'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [email,    setEmail]    = useState('');
  const [password, setPassword] = useState('');
  const [error,    setError]    = useState('');
  const [success,  setSuccess]  = useState('');
  const router = useRouter();

  async function handleRegister(event: React.FormEvent) {
    event.preventDefault();
    setError('');
    setSuccess('');

    try {
      const res = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Registration failed');
      } else {
        setSuccess(data.message);
        setTimeout(() => {
            router.push('/login');
        }, 1500);
      }
    } catch (error) {
      setError('An error occurred. Try again later.');
    }
  }

  return (
    <div className="max-w-sm mx-auto p-4">
      <h1 className="text-2xl font-bold">Register</h1>
      <form onSubmit={handleRegister} className="space-y-4 mt-4">
        <input
          className="w-full border rounded p-2"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          className="w-full border rounded p-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          type="email"
        />
        <input
          className="w-full border rounded p-2"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          type="password"
        />
        <button className="w-full bg-blue-600 text-white rounded p-2">
            Register
        </button>
        {error && <p className="text-red-600">{error}</p>}
        {success && <p className="text-green-600">{success}</p>}
      </form>
    </div>
  );
}




// 'use client';
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { signIn } from 'next-auth/react';

// export default function RegisterPage() {
//   const [username, setUsername] = useState('');
//   const [email,    setEmail]    = useState('');
//   const [password, setPassword] = useState('');
//   const [error,    setError]    = useState('');
//   const [success,  setSuccess]  = useState('');

//   const router = useRouter();

//   async function handleRegister(event: React.FormEvent) {
//     event.preventDefault();
//     setError('');
//     setSuccess('');

//     try {
//       const res = await fetch('http://localhost:3004/register', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, email, password }),
//       });
//       const data = await res.json();

//       if (!res.ok) {
//         setError(data.error || 'Registration failed');
//       } else {
//         setSuccess(data.message);
//         setTimeout(() => {
//             router.push('/login');
//         }, 1500);
//       }
//     } catch (error) {
//       setError('An error occurred. Try again later.');
//     }
//   }

//   async function handleGoogleSignIn() {
//     await signIn('google', { callbackUrl: '/' }); 
//   }

//   return (
//     <div className="max-w-sm mx-auto p-4">
//       <h1 className="text-2xl font-bold">Register</h1>
//       <form onSubmit={handleRegister} className="space-y-4 mt-4">
//         <input
//           className="w-full border rounded p-2"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//         <input
//           className="w-full border rounded p-2"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           type="email"
//         />
//         <input
//           className="w-full border rounded p-2"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           type="password"
//         />
//         <button className="w-full bg-blue-600 text-white rounded p-2">
//             Register
//         </button>
//         {error && <p className="text-red-600">{error}</p>}
//         {success && <p className="text-green-600">{success}</p>}

//         <div className="flex items-center justify-center mt-4">
//             <span className="text-gray-500">or</span>
//         </div>
//         <button
//             type="button"
//             onClick={handleGoogleSignIn}
//             className="w-full mt-2 flex items-center justify-center rounded p-2 border hover:bg-gray-100"
//         >
//             Sign in with Google
//         </button>
//       </form>
//     </div>
//   );
// }
 