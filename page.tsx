import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (


    <div className="relative h-screen w-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/smktelkom.jpg ')" }}>
      <div className="bg-green-200 *:" />

      <div className=" bg-gradient-to-r from-red-900 to-black hover:bg-green-900 rounded-3xl p-20 max-w-full text-center shadow-2xl ">
        <h1 className="text-2xl font-bold text-white mb-5 font-mono ">Absensi Siswa </h1>
        <p className="text-4xl font-bold text-center font-mono ">SMk TELKOM MALANG </p>
        <p className="text-white/80 m-5 font-bold ">Segera Absensi Supaya Menjadi Anak Telkom :)</p>

        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Masukkan nama lengkap"
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white focus:outline focus:ring-yellow-300 hover:opacity-90"
          />
          <input
            type="text"
            placeholder="Password anda "
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white hover:opacity-90 focus:outline focus:ring-yellow-300"
          />

         
              <Link href="/dashboard">
          <button
            className="bg-gradient-to-r from-red-600 to-orange-200 text-white font-semibold py-3 rounded-lg mt-2 hover:opacity-50" >Login
          </button></Link>
        </form>
      </div>
    </div>
  );
} 
