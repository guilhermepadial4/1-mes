import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Heart, Calendar, Quote, Stars } from 'lucide-react';
import useSound from 'use-sound';

import Foto1 from './assets/1.jpg';
import Foto2 from './assets/3.jpg';
import Foto3 from './assets/2.jpg';
import Foto4 from './assets/4.jpg';
import Foto5 from './assets/5.jpg';
import Foto6 from './assets/6.jpg';
import music from './assets/eternamente.mp3';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState({ days: 30, hours: 0, minutes: 0, seconds: 0 });
  const [play, { pause, sound }] = useSound(music, { interrupt: true });
  const soundRef = useRef(sound);

  useEffect(() => {
    soundRef.current = sound;
  }, [sound]);

  useEffect(() => {
    const timer = setInterval(() => {
      const start = new Date('2025-02-22T01:25:00');
      const now = new Date();
      const diff = now.getTime() - start.getTime();

      setTimeElapsed({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handlePlayPause = () => {
    if (isPlaying) {
      pause();
    } else {
      if (soundRef.current) {
        soundRef.current.play();
      } else {
        play();
      }
    }
    setIsPlaying(!isPlaying);
  };

  const memories = [
    {
      title: 'Nosso Primeiro Encontro',
      date: '18 de Janeiro',
      description: 'O dia em que bebi cerveja depois de anos e percebi que ia me apaixonar...',
    },
    {
      title: 'Primeiro Beijo',
      date: '18 de Janeiro',
      description: 'Não tem jeito, primeira vez que te beijei vai ficar marcado na minha mente e no meu coração...',
    },
    {
      title: 'Pedido de Namoro',
      date: '22 de Fevereiro',
      description:
        'Aquela madrugada tava linda, o mar, a lua, o clima. Só que eu tinha a coisa mais linda daquela noite olhando para mim, e falando que aceitava namorar comigo...',
    },
    {
      title: 'Nossa Primeira Foto',
      date: '19 de Janeiro',
      description:
        'Algo que sempre foi de muito debate, mas nossa primeira foto fui eu que tirei. No sofá esperando o uber para você ir embora...',
    },
  ];

  const photos = [
    { url: Foto1, caption: 'Nosso passeio no centro' },
    { url: Foto2, caption: 'A gente muito felizinhos com aliança no dedo' },
    { url: Foto3, caption: 'Essa aqui você ta gata absurdos' },
    { url: Foto4, caption: 'Gostei mucho desse rolezinho' },
    { url: Foto5, caption: 'A foto que a gente tirou para sua vó' },
    { url: Foto6, caption: 'Eu parecendo uma alma penada. Mas no melhor lugar do mundo, com a melhor pessoa do mundo' },
  ];

  const reasons = [
    'Seu cheiro único.',
    'As suas bitocas infinitas.',
    'Nossos diálagos que só a gente entende.',
    'Um ensebando o outro.',
    'Seus videos do tiktok.',
    'Seu riso frouxo.',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 overflow-x-hidden">
      {/* Floating Hearts Background */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: Math.random() * window.innerHeight, x: Math.random() * window.innerWidth }}
          animate={{
            y: [null, Math.random() * -800],
            x: Math.random() * window.innerWidth,
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="fixed z-0"
        >
          <Heart
            className="text-pink-500 opacity-30"
            style={{
              width: `${20 + Math.random() * 20}px`,
              height: `${20 + Math.random() * 20}px`,
            }}
            fill="currentColor"
          />
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="bg-white/30 backdrop-blur-md rounded-full p-20 mb-8"
          >
            <Heart className="w-24 h-24 text-pink-600" fill="currentColor" />
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-5xl md:text-7xl font-bold text-pink-600 mb-6"
          >
            Feliz 1 Mês, Meu Amor!
          </motion.h1>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex gap-8 text-center mb-12"
          >
            {Object.entries(timeElapsed).map(([unit, value]) => (
              <div key={unit} className="bg-white/50 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-pink-600">{value}</div>
                <div className="text-sm text-gray-700">{unit}</div>
              </div>
            ))}
          </motion.div>
        </motion.section>

        {/* Timeline Section */}
        <section className="py-20 bg-white/20 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-4xl font-bold text-center text-pink-600 mb-12"
            >
              Nossa História
            </motion.h2>

            <div className="max-w-4xl mx-auto">
              {memories.map((memory, index) => (
                <motion.div
                  key={index}
                  initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="flex items-center gap-8 mb-12"
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'order-2'}`}>
                    <h3 className="text-2xl font-semibold text-pink-600 mb-2">{memory.title}</h3>
                    <p className="text-gray-600 mb-1">{memory.date}</p>
                    <p className="text-gray-800">{memory.description}</p>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-pink-600 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-4xl font-bold text-center text-pink-600 mb-12"
            >
              Momentos Especiais
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {photos.map((photo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-xl shadow-xl"
                >
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    className="w-full h-72 object-contain transform group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white text-lg">{photo.caption}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Reasons Section */}
        <section className="py-20 bg-white/20 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-4xl font-bold text-center text-pink-600 mb-12"
            >
              Por Que Eu Amo Você
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/50 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <Quote className="w-8 h-8 text-pink-500 mb-4" />
                  <p className="text-lg text-gray-800">{reason}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final Message */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="max-w-3xl mx-auto bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
            >
              <Stars className="w-12 h-12 text-pink-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-pink-600 mb-4">Um Mês é Só o Começo</h2>
              <p className="text-xl text-gray-800 mb-6">
                Morena, às vezes eu fico pensando em como a vida é boa comigo por ter te colocado no meu caminho. Você é meu amor mais
                bonito e minha risada mais sincera. Amo como você me tira da minha zona de conforto, amo quando você esta na minha zona de
                conforto, na real, qualquer zona é perfeita quando eu estou com você. <br />
                <br /> A gente passa horas vendo tiktok e conversando sobre, e esses são os meus momentos favorios, aqueles que são só eu e
                você, e podemos conversar e se abraçar por horas a fio. <br />
                <br /> Os filmes então… Meu Deus, a gente nunca termina um! Sempre tem um papo aleatório que começa do nada, ou só aquela
                preguiça gostosa de prestar atenção quando, na verdade, o melhor mesmo é estar ali, agarradinho com você. Acho que não é
                sobre o filme, né? É sobre o que sinto estando ao seu lado. <br />
                <br /> E os hambúrgueres? Pode falar, sou um verdadeiro chef quando se trata de te fazer feliz na cozinha. Sei que você ama
                quando eu faço, mas confesso que a minha maior felicidade não é cozinhar, e sim te ver comendo e fazendo aquela carinha de
                “tá muito bom”. Você não tem ideia do quanto isso me faz feliz. <br />
                <br /> Minha morena, você é meu abraço favorito, minha paz no meio da correria, minha melhor escolha todos os dias. Quero
                lhe oferecer o mesmo número de beijocas que o Número de Graham 💋. Você é o amor da minha vida. Eu amo você mucho mucho
                mucho. Eu amo você de um jeito que nem cabe em palavras, mas se coubesse, eu escreveria todas elas só para você. 💘💐
              </p>
              <p className="text-2xl font-bold text-pink-600">Eu Amo Você! ❤️</p>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Music Player */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          onClick={handlePlayPause}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          className="bg-pink-600 hover:bg-pink-700 text-white rounded-full p-4 shadow-lg transition-all duration-300"
        >
          {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
        </motion.button>
      </div>
    </div>
  );
}

export default App;