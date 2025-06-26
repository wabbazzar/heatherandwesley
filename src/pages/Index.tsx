
import React, { useState, useEffect } from 'react';
import { CharacterProvider, useCharacter } from '@/contexts/CharacterContext';
import { CharacterSelector } from '@/components/CharacterSelector';
import { CharacterSwitcher } from '@/components/CharacterSwitcher';
import { HeroSection } from '@/components/HeroSection';
import { WeddingDetails } from '@/components/WeddingDetails';
import { RSVPSection } from '@/components/RSVPSection';

const IndexContent: React.FC = () => {
  const { selectedCharacter } = useCharacter();
  const [showCharacterSelector, setShowCharacterSelector] = useState(false);

  useEffect(() => {
    if (!selectedCharacter) {
      setShowCharacterSelector(true);
    }
  }, [selectedCharacter]);

  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: !selectedCharacter ? `url(/lovable-uploads/30a58018-bcb5-4eef-9456-61020c703a8d.png)` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background overlay for initial load */}
      {!selectedCharacter && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/40 via-purple-900/40 to-blue-900/40" />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </>
      )}
      
      <CharacterSelector 
        open={showCharacterSelector} 
        onOpenChange={setShowCharacterSelector} 
      />
      
      {selectedCharacter && (
        <>
          <CharacterSwitcher />
          <HeroSection />
          <WeddingDetails />
          <RSVPSection />
        </>
      )}
    </div>
  );
};

const Index: React.FC = () => {
  return (
    <CharacterProvider>
      <IndexContent />
    </CharacterProvider>
  );
};

export default Index;
