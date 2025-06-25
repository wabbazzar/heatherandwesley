
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
    <div className="min-h-screen">
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
