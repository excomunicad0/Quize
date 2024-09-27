import React from 'react';
import styles from './UserCard.module.css';
import { User } from '../../model';
import { useAppSelector } from '@/shared/hooks/reduxhooks';
type Props = {
  user: User
}

export const UserCard: React.FC<Props> = ({ user }) => {
  const { game } = useAppSelector((state) => state.game);
    return (
      <div className={styles.container}>
        <div className={styles.avatarContainer}>
          Привет, {user.name}! {game && `Твой счёт: ${game.score}`}
        </div>
      </div>
    );
  };

export default UserCard