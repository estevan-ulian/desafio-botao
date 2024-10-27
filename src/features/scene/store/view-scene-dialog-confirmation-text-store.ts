import { create } from "zustand";

interface IViewSceneDialogConfirmationTextStore {
	actions: {
		openDialog: () => void;
		closeDialog: () => void;
	};
	state: {
		isOpen: boolean;
	};
}

export const useViewSceneDialogConfirmationTextStore =
	create<IViewSceneDialogConfirmationTextStore>()((set) => ({
		actions: {
			openDialog: () =>
				set((store) => ({
					...store,
					state: {
						isOpen: true,
					},
				})),
			closeDialog: () =>
				set((store) => ({
					...store,
					state: {
						isOpen: false,
					},
				})),
		},
		state: { isOpen: false },
	}));
