import { ProfileEntity } from './entities/profile.entity';
import { ProfileDto } from './dto/profile.dto';

export function mapProfileEntityToProfileDto(
  profile: ProfileEntity,
): ProfileDto {
  return {
    email: profile.email,
    id: profile.id,
    username: profile.username,
  } satisfies ProfileDto;
}
