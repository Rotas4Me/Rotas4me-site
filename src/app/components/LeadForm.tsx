'use client';

import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

interface LeadFormProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: string;
}

export default function LeadForm({ isOpen, onClose, selectedPlan }: LeadFormProps) {
  const [formData, setFormData] = useState({
    plan: selectedPlan,
    fullName: '',
    email: '',
    whatsapp: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  // Atualizar o plano quando selectedPlan mudar
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      plan: selectedPlan
    }));
  }, [selectedPlan]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Configurar EmailJS
      const serviceId = 'service_kdgcnea';
      const templateId = 'template_aahdrp4';
      const publicKey = 'AzGWZV0vXyO3j6uXm';

      // Dados para o template
      const templateParams = {
        plan: formData.plan,
        fullName: formData.fullName,
        email: formData.email,
        whatsapp: formData.whatsapp,
      };

      console.log('Enviando dados para EmailJS:', templateParams);

      // Enviar email
      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      setIsSuccess(true);
      // Resetar formulário após 2 segundos
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          plan: selectedPlan,
          fullName: '',
          email: '',
          whatsapp: ''
        });
        onClose();
      }, 2000);

    } catch (err) {
      console.error('Erro ao enviar formulário:', err);
      setError('Erro ao enviar formulário. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
        >
          ×
        </button>

        {isSuccess ? (
          <div className="text-center py-8">
            <div className="text-green-500 text-4xl mb-4">✓</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Obrigado pelo seu interesse!
            </h3>
            <p className="text-gray-600">
              Entraremos em contato em breve com mais informações sobre o plano {selectedPlan}.
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Interesse no Plano {selectedPlan}
            </h2>
            
            <p className="text-sm text-gray-600 mb-6 text-center leading-relaxed">
              A finalidade da coleta dessas informações é única e exclusivamente coletar meios de contato para informar quando o app for lançado.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-black"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-black"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">
                  WhatsApp *
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-black"
                  placeholder="(11) 99999-9999"
                />
              </div>

              {error && (
                <div className="text-red-600 text-sm text-center bg-red-50 p-2 rounded">
                  {error}
                </div>
              )}

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Enviando...' : 'Enviar'}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
