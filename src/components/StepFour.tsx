import React from 'react';

interface UserInfo {
  name: string;
  phone: string;
  countryCode: string;
  email: string;
  acceptTerms: boolean;
}

interface StepFourProps {
  userInfo: UserInfo;
  onUserInfoChange: (field: keyof UserInfo, value: string | boolean) => void;
  subscribeToEmails: boolean;
  onSubscribeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const countryCodes = [
  { code: '+34', country: 'España' },
  { code: '+52', country: 'México' },
  { code: '+54', country: 'Argentina' },
  { code: '+57', country: 'Colombia' },
  { code: '+56', country: 'Chile' },
  { code: '+51', country: 'Perú' },
  { code: '+58', country: 'Venezuela' },
];

const StepFour: React.FC<StepFourProps> = ({ 
  userInfo,
  onUserInfoChange,
  subscribeToEmails,
  onSubscribeChange
}) => {
  return (
    <div>
      <h2 className="text-2xl font-sora font-bold text-gray-800 mb-2">¡Último paso! Completa tus datos para ver tus resultados</h2>
      <p className="text-gray-600 font-inter mb-4">Los campos marcados con * son obligatorios</p>
      
      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-inter font-medium text-gray-700 mb-1">
            Nombre completo *
          </label>
          <input
            type="text"
            id="name"
            value={userInfo.name}
            onChange={(e) => onUserInfoChange('name', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#513DEB] focus:border-[#513DEB] transition-colors font-inter"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-inter font-medium text-gray-700 mb-1">
            Teléfono *
          </label>
          <div className="flex gap-2">
            <select
              value={userInfo.countryCode}
              onChange={(e) => onUserInfoChange('countryCode', e.target.value)}
              className="w-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#513DEB] focus:border-[#513DEB] transition-colors font-inter"
            >
              {countryCodes.map(({ code, country }) => (
                <option key={code} value={code}>
                  {code} {country}
                </option>
              ))}
            </select>
            <input
              type="tel"
              id="phone"
              value={userInfo.phone}
              onChange={(e) => onUserInfoChange('phone', e.target.value)}
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#513DEB] focus:border-[#513DEB] transition-colors font-inter"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-inter font-medium text-gray-700 mb-1">
            Correo electrónico (opcional)
          </label>
          <input
            type="email"
            id="email"
            value={userInfo.email}
            onChange={(e) => onUserInfoChange('email', e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#513DEB] focus:border-[#513DEB] transition-colors font-inter"
          />
        </div>
        
        <div className="flex items-start pt-4">
          <input
            type="checkbox"
            id="terms"
            checked={userInfo.acceptTerms}
            onChange={(e) => onUserInfoChange('acceptTerms', e.target.checked)}
            className="mt-1 h-4 w-4 text-[#513DEB] border-gray-300 rounded focus:ring-[#513DEB]"
            required
          />
          <label htmlFor="terms" className="ml-2 text-sm font-inter text-gray-600">
            * Acepto los <a href="#" className="text-[#513DEB] hover:underline">términos y condiciones</a> y la <a href="#" className="text-[#513DEB] hover:underline">política de privacidad</a>
          </label>
        </div>
        
        <div className="flex items-start">
          <input
            type="checkbox"
            id="subscribe"
            checked={subscribeToEmails}
            onChange={onSubscribeChange}
            className="mt-1 h-4 w-4 text-[#513DEB] border-gray-300 rounded focus:ring-[#513DEB]"
          />
          <label htmlFor="subscribe" className="ml-2 text-sm font-inter text-gray-600">
            Acepto recibir correos electrónicos promocionales y actualizaciones.
          </label>
        </div>
      </div>
    </div>
  );
};

export default StepFour