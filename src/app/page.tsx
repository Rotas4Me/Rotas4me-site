'use client';

import Image from "next/image";
import { useState } from "react";
import LeadForm from "./components/LeadForm";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const handlePlanClick = (plan: string) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlan('');
  };
  return (
    <>
      <section
        className="w-full min-h-screen bg-cover bg-center flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-8 lg:px-12 pt-12 md:pt-24 lg:pt-32"
        style={{ backgroundImage: "url('/background.png')" }}
      >
        <div className="flex flex-col items-center md:items-start justify-center w-full md:max-w-lg lg:max-w-xl mb-32 md:mb-0">
          <h1 className="text-white font-extrabold text-[40px] sm:text-[56px] md:text-[72px] lg:text-[90px] xl:text-[120px] leading-tight md:ml-24 lg:ml-52 mb-8 md:mb-16 lg:mb-20 font-poppins text-center md:text-left whitespace-nowrap">
            Rotas
            <br />
            For Me
          </h1>
          <div className="flex flex-col sm:flex-row items-center gap-4 md:ml-24 lg:ml-52 w-full sm:w-auto text-center">
            <a
              href="https://www.youtube.com/shorts/B-SbikprP_s" target="_blank"
              className="bg-[#D65E75] hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition-colors font-poppins text-lg w-full sm:w-auto"
            >
              Versão Demo
            </a>
            <a
              href="https://github.com/Rotas4Me" target="_blank"
              className="text-white font-medium underline-offset-2 hover:underline font-poppins text-lg w-full sm:w-auto"
            >
              Saber mais
            </a>
          </div>
        </div>
      </section>

      <section id="solution" className="w-full py-12 md:py-16 lg:py-20 bg-white flex justify-center">
        <div className="max-w-2xl md:max-w-3xl px-2 md:px-4 flex flex-col items-center text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#33363F] mb-8 md:mb-12 lg:mb-20 font-poppins">
            Nossa solução
          </h2>
          <Image
            src="/solution.png"
            alt="Solução Rotas For Me"
            width={700}
            height={350}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </section>

      <section className="w-full py-10 md:py-20 lg:py-32 bg-white flex justify-center items-center">
        <div className="max-w-5xl md:max-w-7xl w-full flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10 lg:gap-16 px-2 md:px-4">
          <div className="flex-1 flex flex-col items-center md:items-start">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#33363F] mb-6 md:mb-8 lg:mb-10 font-poppins text-center md:text-left">
              Principais 
              <br/>
              Funcionalidades
            </h2>
            <ul className="space-y-8 md:space-y-6 lg:space-y-8 text-center md:text-left text-base xs:text-lg sm:text-xl w-full px-2 sm:px-0">
              <li className="items-center md:items-start">
                <span className="text-[#D65E75] font-bold text-lg sm:text-xl mb-2">
                  Avalie e contribua:</span><span className="text-[#33363F] text-base sm:text-lg"> Marque ruas com boa iluminação, policiamento ou pontos de risco.</span>
              </li>
              <li className="items-center md:items-start">
                <span className="text-[#D65E75] font-bold text-lg sm:text-xl mb-2">
                  Escolha sua rota segura: </span><span className="text-[#33363F] text-base sm:text-lg">
                   Use o app para traçar o melhor caminho, com base em dados públicos e colaboração feminina.</span>
              </li>
              <li className="items-center md:items-start">
                <span className="text-[#D65E75] font-bold text-lg sm:text-xl mb-2">
                  Acesse ajuda em um clique:
                </span>
                <span className="text-[#33363F] text-base sm:text-lg"> Encontre delegacias, abrigos e canais de denúncia próximos a você.
                </span>
              </li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center items-center gap-6 mt-8 md:mt-0">
            <Image
              src="/mock.png"
              alt="Mockup do app"
              width={180}
              height={350}
              className="h-[250px] sm:h-[350px] md:h-[400px] lg:h-[600px] w-auto drop-shadow-xl"
            />
          </div>
        </div>
      </section>

      <section id="survey" className="w-full py-10 md:py-16 lg:py-20 bg-white flex justify-center items-center">
        <div className="max-w-3xl md:max-w-4xl lg:max-w-5xl w-full px-4 md:px-6 flex flex-col items-center text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#33363F] mb-4 md:mb-6 font-poppins">
            Responda nossa pesquisa
          </h2>
          <p className="text-[#33363F] text-sm sm:text-base md:text-lg mb-6 md:mb-8 max-w-2xl">
            Queremos entender melhor como você se sente ao se deslocar pela cidade e como podemos tornar seus caminhos mais seguros.
            Sua resposta é anônima e leva menos de 5 minutos.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdhpALSqhnZMhIrFHwMpMEHRZ-z84givHVS3giVgKq3P-LoZQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-3.5 rounded-lg bg-[#D65E75] hover:bg-pink-600 text-white font-poppins font-semibold text-sm sm:text-base md:text-lg shadow-md transition-colors"
          >
            Responder pesquisa
          </a>
        </div>
      </section>

      <section id="price" className="w-full py-10 md:py-16 lg:py-24 bg-white flex flex-col items-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#33363F] mb-8 md:mb-12 lg:mb-16 font-poppins text-center">
          Planos
        </h2>
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 px-5 md:px-10 lg:px-0">
          <div className="flex flex-col items-center bg-[#FAFAFA] rounded-2xl p-4 md:p-6 lg:p-8 h-full shadow-sm">
            <h3 className="text-xl md:text-2xl lg:text-[35px] font-bold text-[#69B7EE] mb-2 font-poppins uppercase">
              Gratuito
            </h3>
            <p className="text-[#33363F] text-center mb-4 md:mb-6 text-[13px] md:text-[14px] w-full max-w-[16rem]">
              <span className="text-[#69B7EE] font-bold">
                | Segurança acessível a qualquer hora, em qualquer lugar.
              </span>
              <br />
              <br />
              Acesso ao mapa em tempo real com rotas seguras e colaborativas
              <br />
              <br />
              Alertas automáticos em áreas de risco
              <br />
              <br />
              Contribuição com avaliações e fotos da comunidade
              <br />
              <br />
              Acesso direto à rede de apoio próxima e canais de denúncia
              <br />
              <br />
              Compartilhamento de localização com 1 contato de confiança
            </p>
            <div className="text-lg md:text-xl lg:text-[30px] font-semibold text-[#69B7EE] mb-4">
              R$0,00
            </div>
            <button
              onClick={() => handlePlanClick('Gratuito')}
              className="mt-auto bg-[#69B7EE] hover:bg-sky-600 text-white text-[15px] md:text-[16px] lg:text-[20px] font-extrabold px-4 md:px-6 lg:px-8 py-2 md:py-3 rounded-lg transition-colors font-poppins w-full text-center"
            >
              Começar a usar
            </button>
          </div>
          <div className="flex flex-col items-center bg-[#FAFAFA] rounded-2xl p-4 md:p-6 lg:p-8 h-full shadow-sm">
            <h3 className="text-xl md:text-2xl lg:text-[35px] font-bold text-[#D65E75] mb-2 font-poppins uppercase">
              Premium
            </h3>
            <p className="text-[#33363F] text-center mb-4 md:mb-6 text-[13px] md:text-[14px] w-full max-w-[16rem]">
              <span className="text-[#D65E75] font-bold">
                | Para quem quer ainda mais controle, autonomia e proteção
              </span>
              <br />
              <br />
              <span className="text-[#33363F] font-bold">
                *Benefícios do plano gratuito
              </span>
              <br />
              <br />
              Formulário de Avaliação de Risco com recomendações personalizadas
              <br />
              <br />
              Alertas inteligentes com base em histórico de movimentação e
              horário
              <br />
              <br />
              Compartilhamento automático de localização com vários contatos de
              confiança
              <br />
              <br />
              Acesso a estatísticas de segurança por região
              <br />
              <br />
            </p>
            <div className="text-lg md:text-xl lg:text-[30px] font-semibold text-[#D65E75] mb-4">
              R$9,90/mês
            </div>
            <button
              onClick={() => handlePlanClick('Premium')}
              className="mt-auto bg-[#D65E75] hover:bg-pink-600 text-white text-[15px] md:text-[16px] lg:text-[20px] font-extrabold px-4 md:px-6 lg:px-8 py-2 md:py-3 rounded-lg transition-colors font-poppins w-full text-center"
            >
              Adquirir plano
            </button>
          </div>
          <div className="flex flex-col items-center bg-[#FAFAFA] rounded-2xl p-4 md:p-6 lg:p-8 h-full shadow-sm">
            <h3 className="text-lg md:text-xl lg:text-[30px] font-bold text-[#33363F] mb-2 font-poppins uppercase">
              Institucional
            </h3>
            <p className="text-[#33363F] text-center mb-4 md:mb-6 text-[13px] md:text-[14px] w-full max-w-[16rem]">
              <span className="text-[#33363F] font-bold">
                | Para empresas, órgãos públicos e ONGs que querem proteger suas
                comunidades
              </span>
              <br />
              <br />
              Painel de gestão institucional com dados anonimizados de uso
              <br />
              <br />
              Relatórios periódicos sobre áreas críticas e demandas de segurança
              <br />
              <br />
              Visualização de rotas e alertas mais acionados pelas usuárias da
              instituição
              <br />
              <br />
              Suporte para campanhas de prevenção à violência com materiais
              educativos
              <br />
              <br />
              Integração com sistemas internos via API (ex: segurança
              patrimonial, CRM social)
            </p>
            <div className="text-lg md:text-xl lg:text-2xl font-bold text-[#33363F] mb-4">-</div>
            <button
              onClick={() => handlePlanClick('Institucional')}
              className="mt-auto bg-[#33363F] hover:bg-gray-900 text-white text-[15px] md:text-[16px] lg:text-[20px] font-extrabold px-4 md:px-6 lg:px-8 py-2 md:py-3 rounded-lg transition-colors font-poppins w-full text-center"
            >
              Entrar em contato
            </button>
          </div>
        </div>
      </section>

      <section id="initiative" className="w-full flex justify-center items-center py-10 md:py-16 lg:py-24 bg-white">
        <div className="max-w-4xl md:max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10 lg:gap-12 xl:gap-16 px-2 md:px-4">
          <div className="flex-1 flex flex-col items-center md:items-start md:pr-4 lg:pr-6 xl:pr-8 mb-8 md:mb-0">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-[#33363F] leading-tight font-poppins text-center md:text-left">
              Nossa
              <br />
              Iniciativa
            </h2>
          </div>
          <div className="flex-1 w-full">
            <div className="bg-gray-50 rounded-xl p-4 md:p-6 w-full sm:w-[28rem] md:w-[32rem] lg:w-[40rem] xl:w-[52rem] text-base md:text-[1.1rem] lg:text-[1.15rem] xl:text-[1.25rem] mx-auto">
              <p className="text-[#33363F] text-base mb-2">
                <span className="font-bold">Rotas4Me</span> não é só um
                aplicativo. É uma comunidade que protege umas às outras. É sobre
                se sentir segura, ser ouvida, e saber que não está sozinha.
              </p>
              <p className="text-[#33363F] text-base">
                Seja para ir pra casa, pro trabalho ou pra vida, {" "}
                <span className="font-bold">caminhe com a gente! 🩷</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-10 lg:py-16 bg-white flex justify-center items-center">
        <div className="max-w-4xl md:max-w-6xl w-full flex flex-col items-center">
          <div className="w-full flex flex-col sm:flex-row justify-center items-center sm:items-start gap-6 md:gap-8 lg:gap-0">
            {/* Radymilla Camilo - Substitua a URL abaixo pela URL real da foto do LinkedIn */}
            <div className="flex-1 w-full flex flex-col items-center mb-6 md:mb-8 lg:mb-0">
              <a href="https://www.linkedin.com/in/radymilla-cristiano/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                <div className="relative mb-4">
                  <Image
                    src="https://media.licdn.com/dms/image/v2/D4D03AQFjtnLzYPMQSw/profile-displayphoto-shrink_200_200/B4DZaDsj4bH4Ac-/0/1745966219709?e=1770854400&v=beta&t=OIUQ_1G8wdpzZviQnbGkf4PmXeVCh28DqsBrhAO49Yk"
                    alt="Radymilla Camilo"
                    width={120}
                    height={120}
                    className="rounded-full object-cover border-4 border-gray-200 hover:border-pink-500 transition-colors"
                    unoptimized
                  />
                </div>
                <span className="text-black font-bold font-poppins text-base text-center">
                  Radymilla Camilo
                </span>
              </a>
              <span className="text-black text-sm text-center">
                Co-founder
                <br />
                Head of Product & Design
              </span>
            </div>
            {/* Kayus Gracco - Substitua a URL abaixo pela URL real da foto do LinkedIn */}
            <div className="flex-1 w-full flex flex-col items-center mb-6 md:mb-8 lg:mb-0">
              <a href="https://www.linkedin.com/in/engkayusgracco/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                <div className="relative mb-4">
                  <Image
                    src="https://media.licdn.com/dms/image/v2/D4D03AQFxFowKhTalGQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1712526056132?e=1770854400&v=beta&t=_ay-WoFtS_YTHEQd-G7E7MV8tOUJLwpr9QHPwBf9V1Q"
                    alt="Kayus Gracco"
                    width={120}
                    height={120}
                    className="rounded-full object-cover border-4 border-gray-200 hover:border-pink-500 transition-colors"
                    unoptimized
                  />
                </div>
                <span className="text-black font-bold font-poppins text-base text-center">
                  Kayus Gracco
                </span>
              </a>
              <span className="text-black text-sm text-center">
                Co-founder <br />
                Head of Business
              </span>
            </div>
            {/* Fabrício Santos - Substitua a URL abaixo pela URL real da foto do LinkedIn */}
            <div className="flex-1 w-full flex flex-col items-center mb-6 md:mb-8 lg:mb-0">
              <a href="https://www.linkedin.com/in/fabricio-ss/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
                <div className="relative mb-4">
                  <Image
                    src="https://media.licdn.com/dms/image/v2/D4D03AQGDmFbX2cgQGg/profile-displayphoto-shrink_200_200/B4DZdao4j_GYAY-/0/1749572356819?e=1770854400&v=beta&t=8cVqBT7W-pkBMOfxHl-CAOQj45VSG1V4Rf3RoPz-12o"
                    alt="Fabrício Santos"
                    width={120}
                    height={120}
                    className="rounded-full object-cover border-4 border-gray-200 hover:border-pink-500 transition-colors"
                    unoptimized
                  />
                </div>
                <span className="text-black font-bold font-poppins text-base text-center">
                  Fabrício Santos
                </span>
              </a>
              <span className="text-black text-sm text-center">
                Co-founder <br/>
                Head of Technology
              </span>
            </div>
          </div>
        </div>
      </section>

      <LeadForm 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        selectedPlan={selectedPlan} 
      />
    </>
  );
}
