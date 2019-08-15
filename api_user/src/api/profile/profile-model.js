export default function(sequelize, DataTypes) {
	return sequelize.define('profile', {
		profileId: {
			type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
			primaryKey: true,
			field: 'ProfileId'
		},
		customerId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'customer',
				key: 'CustomerId'
			},
			field: 'CustomerId'
		},
		profileName: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'ProfileName'
		},
		profileDescription: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'ProfileDescription'
		},
		profileDeletedDate: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'ProfileDeletedDate'
		},
		profileDeletedUser: {
			type: DataTypes.BIGINT,
			allowNull: true,
			field: 'ProfileDeletedUser'
		}
	}, {
    tableName: 'profile',
    timestamps: false,
	});
};
